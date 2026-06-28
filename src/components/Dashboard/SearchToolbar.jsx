import { FiSearch, FiRefreshCw } from "react-icons/fi";

const SearchToolbar = () => {
  return (
    <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search Input */}
        <div className="relative w-full lg:max-w-md">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search users by name or email..."
            className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3">

          <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500">
            <option>Country</option>
          </select>

          <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500">
            <option>Sort</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
            <option>Age ↑</option>
            <option>Age ↓</option>
          </select>

          <button
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <FiRefreshCw size={18} />
            Refresh
          </button>

        </div>

      </div>
    </section>
  );
};

export default SearchToolbar;