'use client'
import { RootState } from "@/store/store";
import { CloudCog } from "lucide-react";
import { useSelector } from "react-redux";

export default function Dashboard() {
    // const {certificates, loading, error} = useSelector(
    //     (state: RootState) => state.certifications // Updated to match the slice's structure
    // );
    const certification = useSelector((state:RootState)=> state.certifications)
    console.log(certification)
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}
