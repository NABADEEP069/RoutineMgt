'use client';
import React from "react";

export default function Home() {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 text-black">
            <div className="border border-gray-300 shadow-lg p-10 rounded-2xl bg-white w-[600px]">
                <div className="text-center text-2xl font-extrabold mb-4">Welcome, Admin!</div>
                
                <p className="text-center text-sm text-gray-600 mb-6">
                    This website helps manage routine tasks efficiently. Navigate through the departments 
                    to find specific information and tools tailored for each section.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-4">
                        <div className="text-left text-lg font-bold mb-2">Select Branch:</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition w-full" onClick={() => window.location.href = '/dept'}>CSE</button>
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition w-full" onClick={() => window.location.href = '/dept'}>CE</button>
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition w-full" onClick={() => window.location.href = '/dept'}>IE</button>
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition w-full" onClick={() => window.location.href = '/dept'}>ECE</button>
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition w-full" onClick={() => window.location.href = '/dept'}>FET</button>
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition w-full" onClick={() => window.location.href = '/dept'}>MCD</button>
                        </div>
                    </div>
                    <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 shadow-md">
                        <div className="text-lg font-bold mb-2 text-center">📢 Notice</div>
                        <p className="text-sm text-gray-600 text-center">
                            Stay tuned for upcoming events and important announcements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
