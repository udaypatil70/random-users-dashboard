import { FaUsers } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg transition-transform duration-300 hover:scale-105">
            <FaUsers className="text-white" size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              UserHub
            </h1>

            <p className="text-xs text-slate-500 font-medium">
              Discover users worldwide
            </p>
          </div>
        </div>

        <button className="rounded-lg border border-cyan-200 bg-gradient-to-br from-cyan-50 to-teal-50 p-2.5 text-slate-700 shadow-sm transition duration-300 hover:border-cyan-300 hover:shadow-md active:scale-95">
          <HiOutlineMoon size={20} className="text-cyan-600" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
