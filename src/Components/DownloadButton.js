import React from 'react';
import resumeFile from '../Files/Resume.pdf'; // Adjust the path to your resume file in the src folder

const DownloadButton = ({ buttonText = 'Download Resume', className = '' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-300 ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default DownloadButton;