import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(
    buffer: Buffer,
    options: {
        folder: string;
        resource_type: "image" | "video" | "raw" | "auto";
    }
): Promise<string> {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: options.folder,
                resource_type: options.resource_type,
            },
            (error, result) => {
                if (error || !result) {
                    reject(error || new Error("Upload failed"));
                    return;
                }
                resolve(result.secure_url);
            }
        );

        // Write buffer to stream
        uploadStream.write(buffer);
        uploadStream.end();
    });
}
