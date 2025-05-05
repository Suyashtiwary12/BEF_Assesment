import {
    Menu, Search, Settings, Folder, Bell, Globe, CircleUser, LayoutGrid,
    Circle, CircleCheck, CircleX
  } from "lucide-react";
  
  export default function Header({toggleSidebar}) {
    return (
      <header className="w-full h-14 bg-white shadow flex items-center justify-between px-4 border-b">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <Menu className="w-5 h-5 text-blue-500 cursor-pointer" onClick={toggleSidebar} />
          <h1 className="text-xl font-bold font-serif">Bhartiya Economic Form</h1>
          {/* <Search className="w-5 h-5 text-gray-500 ml-4" />
          <div className="text-sm text-gray-700 cursor-pointer">Mega Menu ▾</div>
          <div className="flex items-center space-x-1 text-sm text-red-500 cursor-pointer">
            <Circle className="w-3 h-3 fill-red-500 text-red-500" />
            <span>Settings ▾</span>
          </div>
          <div className="text-sm text-gray-700 cursor-pointer">Projects ▾</div> */}
        </div>
  
        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <LayoutGrid className="w-5 h-5 text-gray-600 cursor-pointer" />
          <Circle className="w-5 h-5 text-pink-400 cursor-pointer" />
          <Globe className="w-5 h-5 text-black cursor-pointer" />
          <CircleCheck className="w-5 h-5 text-green-500 cursor-pointer" />
  
          <div className="flex items-center space-x-2 ml-4">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <div className="font-medium text-gray-800 leading-tight">Alina Mclourd</div>
              <div className="text-xs text-gray-500">VP People Manager</div>
            </div>
          </div>
  
          {/* <div className="bg-blue-500 w-6 h-6 rounded-sm flex items-center justify-center cursor-pointer">
            <Menu className="w-4 h-4 text-white" />
          </div> */}
        </div>
      </header>
    );
  }
  