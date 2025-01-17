import Header from '../components/Header';
import RecentFiles from '../components/RecentFiles';
import UploadArea from '../components/UploadArea';
import FileList from '../components/FileList';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1 p-6">
        <Header />
        <RecentFiles />
        <UploadArea />
        <FileList />
      </div>
      <Sidebar />
    </div>
  );
}
