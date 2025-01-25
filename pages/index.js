// pages/index.js
import React, { useState } from 'react';
import Header from '../components/Header';
import RecentFiles from '../components/RecentFiles';
import UploadArea from '../components/UploadArea';
import FileList from '../components/FileList';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [files, setFiles] = useState([]);

  // Handle file upload and add them to the file list
  const handleFileUpload = (uploadedFiles) => {
    const newFiles = Array.from(uploadedFiles).map((file) => ({
      name: file.name,
      shared: 'N/A',
      size: `${(file.size / 1024).toFixed(2)} KB`, // File size in KB
      modified: new Date().toLocaleDateString(),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <div className="flex" style={{backgroundColor: "#1d1e22"}}>
      <Sidebar />
      <div className="flex-1 p-12">
        <Header />
        <RecentFiles />
        <UploadArea onFileUpload={handleFileUpload} />
        <FileList files={files} />
      </div>
    </div>
  );
}
