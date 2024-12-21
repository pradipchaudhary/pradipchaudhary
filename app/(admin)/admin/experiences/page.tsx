import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <h1>Experiences</h1>

            <Link href="/admin/experiences/new">Create New</Link>
        </div>
    );
};

export default page;
