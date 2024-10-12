

import React from 'react';
import html2pdf from 'html2pdf.js';
import ResumeContent from './mini-component/ResumeContent'; // Import ResumeContent

function Resume() {
    const downloadResume = () => {
        // Get the resume content from the hidden div
        const element = document.getElementById('resume-content');

        // Use html2pdf to convert the hidden content to a PDF
        html2pdf()
            .from(element)
            .set({
                
                filename: 'Chibuike_Innocent_Onyemaobi_Resume.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            })
            .save(); // Trigger the download
    };

    return (
        <div className=''>
            {/* Render the hidden ResumeContent */}
            <ResumeContent />

            <div className='p-5'>
                <button
                    onClick={downloadResume}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded "
                >
                    Download my resume
                </button>
            </div>

        </div>
    );
}

export default Resume;
