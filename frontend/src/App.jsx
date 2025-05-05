import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UploadCSV from './components/UploadCSV';
import TemplateEditor from './components/TemplateEditor';
import Scheduler from './components/Scheduler';
import Analytics from './components/Analytics';
import Header from './components/Header';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full z-10">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </header>

        {/* Sidebar + Main Content */}
        <div className="flex flex-1 w-full">
          {sidebarOpen && (
            <aside className="w-64 bg-white shadow-md z-20">
              <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
            </aside>
          )}

          <main className=" w-full p-4 bg-gray-50 overflow-x-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/upload" />} />
              <Route path="/upload" element={<UploadCSV />} />
              <Route path="/template" element={<TemplateEditor />} />
              <Route path="/schedule" element={<Scheduler />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
