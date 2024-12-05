import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "your-secret-key"
);

export async function generateToken(user: { id: string; role: string }) {
    try {
        const token = await new SignJWT({ id: user.id, role: user.role })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("24h")
            .sign(JWT_SECRET);

        return { success: true, token };
    } catch (error) {
        console.error("[GENERATE_TOKEN]", error);
        return { success: false, message: "Failed to generate token" };
    }
}

export async function verifyAuth() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin-token")?.value;

        if (!token) {
            return { success: false, message: "No token found" };
        }

        const { payload } = await jwtVerify(token, JWT_SECRET);
        const { id, role } = payload as { id: string; role: string };

        if (role !== "ADMIN") {
            return { success: false, message: "Unauthorized access" };
        }

        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user || user.role !== "ADMIN") {
            return { success: false, message: "Unauthorized access" };
        }

        return { success: true, user };
    } catch (error) {
        console.error(
            "[AUTH_VERIFY]",
            error instanceof Error ? error.message : "Unknown error"
        );
        return { success: false, message: "Authentication failed" };
    }
}
