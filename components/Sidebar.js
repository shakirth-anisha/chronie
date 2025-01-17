export default function Sidebar() {
    const handleAddMd = () => alert('Add md functionality coming soon!');
    const handleAddWhiteboard = () => alert('Add whiteboard functionality coming soon!');
    const handleJoin = () => alert('Join functionality coming soon!');
  
    return (
      <div className="w-1/4 bg-gray-900 text-white p-6">
        <div className="bg-gray-800 rounded-full w-24 h-24 mb-6"></div>
        <button className="block w-full bg-gray-700 rounded py-2 mb-4" onClick={handleAddMd}>
          Add md
        </button>
        <button className="block w-full bg-gray-700 rounded py-2 mb-4" onClick={handleAddWhiteboard}>
          Add whiteboard
        </button>
        <button className="block w-full bg-gray-700 rounded py-2" onClick={handleJoin}>
          Join
        </button>
      </div>
    );
  }
  