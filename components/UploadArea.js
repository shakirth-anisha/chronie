export default function UploadArea() {
    const handleUpload = () => {
      alert('Upload functionality coming soon!');
    };
  
    return (
      <div
        className="mb-8 p-6 border-dashed border-2 rounded-lg flex items-center justify-center cursor-pointer"
        onClick={handleUpload}
      >
        <span className="text-gray-400">Drag and drop files</span>
      </div>
    );
  }
  