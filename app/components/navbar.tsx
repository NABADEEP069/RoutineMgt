'use client';
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-4 px-8 shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Routine Manager</h1>
                <div className="space-x-6">
                    <Link href="/home" className="hover:text-gray-300">Home</Link>
                    <Link href="/signup" className="hover:text-gray-300">Sign Up</Link>
                    <Link href="/logout" className="hover:text-red-400">Logout</Link>
                </div>
            </div>
        </nav>
    );
}