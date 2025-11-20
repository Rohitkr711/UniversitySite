import { useState } from "react";

function VoucherClaimComp() {
    const [applicantID, setApplicantID] = useState("");
    const [scholarshipCode, setScholarshipCode] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        // Hook up your actual validation + API call here
        alert(`Voucher claimed for Applicant ID: ${applicantID}`);
    };


    return (
        <aside className="w-full md:w-1/3 rounded-xl shadow-md bg-gradient-to-b from-[#E8F2FF] to-[#CFE5FF] p-6 md:p-7">
            <h2 className="text-xl font-semibold text-slate-800">Scholarship Voucher Claim</h2>
            <p className="text-slate-600 text-sm mt-1">Secure your exclusive funding</p>


            {/* Step 1 */}
            <div className="mt-6">
                <h3 className="text-sm font-medium text-slate-800">Step 1: Download Your Voucher</h3>
                <button className="cursor-pointer mt-3 w-full flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 ext-sm font-medium text-white hover:bg-blue-700 transition">
                    <span>Download PDF Voucher</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        {/* <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v8.69l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V2.75A.75.75 0 0110 2z" clipRule="evenodd" /> */}
                        {/* <path className="border-2 border-red-600" d="M3.5 12.75A1.75 1.75 0 015.25 11h9.5A1.75 1.75 0 0116.5 12.75v2A1.75 1.75 0 0114.75 16.5h-9.5A1.75 1.75 0 013.5 14.75v-2z" /> */}
                    </svg>
                    {/* Download PDF Voucher */}
                </button>
                <a href="#" className="mt-2 block text-center text-xs text-blue-700 hover:underline">
                    View Terms & Conditions
                </a>
            </div>


            {/* Step 2 */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <h3 className="text-sm font-medium text-slate-800">Step 2: Enter Your Details</h3>


                <input
                    type="text"
                    placeholder="Applicant ID"
                    value={applicantID}
                    onChange={(e) => setApplicantID(e.target.value)}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-black/80 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                />
                <input
                    type="text"
                    placeholder="Scholarship Code"
                    value={scholarshipCode}
                    onChange={(e) => setScholarshipCode(e.target.value)}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-black/80 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                />


                {/* Smaller Validate button like the mock */}
                <div className="mt-1 flex border-red-600 justify-center">
                    <button
                        type="submit"
                        className="cursor-pointer inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
                    >
                        Validate & Claim
                    </button>
                </div>
            </form>
        </aside>
    );
}

export default VoucherClaimComp;