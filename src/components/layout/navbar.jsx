import { FaUsers } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
            <FaUsers
              className="text-white"
              size={26}
            />
          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              Random Users Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              Explore random users from around the world
            </p>

          </div>

        </div>

        <button
          className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:bg-slate-100"
        >
          <HiOutlineMoon size={24}/>
        </button>

      </div>
    </header>
  );
};

export default Navbar;