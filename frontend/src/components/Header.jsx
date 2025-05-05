import {
  Menu, LayoutGrid, Circle, Globe, CircleCheck
} from "lucide-react";

export default function Header({ toggleSidebar }) {
  return (
    <header className="w-full h-14 bg-white shadow flex items-center justify-between px-4 border-b">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <Menu className="w-5 h-5 text-blue-500 cursor-pointer" onClick={toggleSidebar} />
        <h1 className=" hidden lg:block text-xl font-bold font-serif">Bhartiya Economic Form</h1>
        <h1 className=" block text-xl font-bold font-serif lg:hidden">BEF</h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Icons - hide some on small screens */}
        <LayoutGrid className="w-5 h-5 text-gray-600 cursor-pointer hidden sm:block" />
        <Circle className="w-5 h-5 text-pink-400 cursor-pointer hidden sm:block" />
        <Globe className="w-5 h-5 text-black cursor-pointer hidden sm:block" />
        <CircleCheck className="w-5 h-5 text-green-500 cursor-pointer hidden sm:block" />

        {/* User profile - simplify on small screens */}
        <div className="flex items-center space-x-2 ml-2 md:ml-4">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="hidden md:block text-sm">
            <div className="font-medium text-gray-800 leading-tight">Alina Mclourd</div>
            <div className="text-xs text-gray-500">policymaker</div>
          </div>
        </div>
      </div>
    </header>
  );
}
