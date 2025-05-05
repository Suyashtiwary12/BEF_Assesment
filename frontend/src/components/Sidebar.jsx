import { Link, useLocation } from 'react-router-dom';
import { Upload, Edit, Calendar, BarChart, X } from 'lucide-react';

export default function Sidebar({ isOpen, closeSidebar }) {
  const location = useLocation();

  const navLink = (to, Icon, label) => (
    <Link
      to={to}
      className={`flex items-center space-x-2 hover:text-blue-600 ${
        location.pathname === to ? 'text-blue-600 font-semibold' : ''
      }`}
      onClick={closeSidebar} // close drawer on mobile when clicking link
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 border-r p-4 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        {/* Close icon for mobile */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h1 className="text-lg font-bold">MENU</h1>
          <X className="cursor-pointer" onClick={closeSidebar} />
        </div>

        {/* Title for desktop */}
        <h1 className="text-xl font-bold mb-6 hidden md:block">MENU</h1>

        <nav className="space-y-4">
          {navLink('/upload', Upload, 'Upload CSV')}
          {navLink('/template', Edit, 'Email Template')}
          {navLink('/schedule', Calendar, 'Schedule')}
          {navLink('/analytics', BarChart, 'Analytics')}
        </nav>
      </div>
    </>
  );
}
