import { FaUsers } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <FaUsers size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Random Users Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              Explore random users from around the world
            </p>
          </div>
        </div>

        {/* Theme Button */}
        <button
          className="rounded-xl border border-slate-300 p-3 transition hover:bg-slate-100"
          aria-label="Toggle Theme"
        >
          <HiOutlineMoon size={22} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;