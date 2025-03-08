'use client';
import React from "react";

export default function SelectSemester() {
    const handleSemesterClick = (semester: string) => {
        // Navigate to the respective semester page
        window.location.href = `./${semester}`;
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex justify-center space-x-10">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Select your respective semester
                        </div>
                    </div>
                    <div className="pt-2 grid grid-cols-2 gap-4">
                        {Array.from({ length: 8 }, (_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => handleSemesterClick(`semester${i + 1}`)}
                                className="mt-2 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                            >
                                Semester {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="text-2xl font-bold">
                        Department Information
                    </div>
                    <div className="mt-4">
                        <div className="text-lg font-semibold">
                            Head of Department (HOD)
                        </div>
                        <div className="text-sm">
                            Dr. John Doe
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-lg font-semibold">
                            Faculty Members
                        </div>
                        <div className="text-sm">
                            Dr. Jane Smith, Prof. Alan Brown, Dr. Emily White
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
