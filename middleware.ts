import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "your-secret-key"
);

async function verifyAuthToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload.role === "ADMIN";
    } catch {
        return false;
    }
}

export async function middleware(request: NextRequest) {
    // If accessing root path, redirect to home
    if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // Check if it's an admin route
    if (request.nextUrl.pathname.startsWith("/admin")) {
        const token = request.cookies.get("admin-token")?.value;

        if (!token || !(await verifyAuthToken(token))) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/admin/:path*"],
};
