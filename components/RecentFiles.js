export default function RecentFiles() {
    const files = [
      { name: 'cef jdkmjkecfd', id: 1 },
      { name: 'wxdjxsmk', id: 2 },
      { name: 'uhbdxwhwbdxh', id: 3 }
    ];
  
    const handleCopy = (name) => {
      navigator.clipboard.writeText(name);
      alert(`Copied link: ${name}`);
    };
  
    const handleDelete = (name) => {
      alert(`Delete pop-up for ${name}`);
    };
  
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recently Edited</h2>
          <a href="#" className="text-blue-500 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {files.map((file) => (
            <div key={file.id} className="p-4 bg-gray-100 rounded shadow">
              <span className="block mb-2">{file.name}</span>
              <button
                className="bg-gray-300 px-2 py-1 rounded mr-2"
                onClick={() => handleCopy(file.name)}
              >
                Copy link
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(file.name)}
              >
                Delete pop up
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  