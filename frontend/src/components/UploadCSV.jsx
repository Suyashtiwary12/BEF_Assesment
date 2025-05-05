import React, { useState, useRef } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === 'text/csv') {
      setSelectedFile(file);
      setErrorMessage('');
    } else if (file) {
      setSelectedFile(null);
      setErrorMessage('Please upload a valid .csv file.');
    } else {
      setSelectedFile(null);
      setErrorMessage(''); // Clear error if no file is selected
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // --- REPLACE THIS WITH YOUR ACTUAL UPLOAD LOGIC ---
      console.log('Uploading file:', selectedFile);
      // You would typically use a library like 'axios' or the Fetch API
      // to send the 'selectedFile' to your server.
    } else {
      setErrorMessage('Please select a file to upload.');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically trigger the file input
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-md">
      <label htmlFor="fileInput" className="block text-gray-700 text-sm font-bold mb-2">
        Upload CSV File
      </label>
      <input
        type="file"
        id="fileInput"
        accept=".csv"
        className="hidden" // Hide the default file input
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleButtonClick}
      >
        {selectedFile ? selectedFile.name : 'Select File'}
      </button>
      {errorMessage && <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>}
      {selectedFile && !errorMessage && (
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
          onClick={handleUpload}
        >
          Upload
        </button>
      )}
    </div>
  );
}

export default FileUpload;