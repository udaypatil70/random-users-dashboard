import { FiSearch, FiRefreshCw } from "react-icons/fi";

const SearchToolbar = ({ 
  searchTerm,
   setSearchTerm,
    onRefresh
   }) => {
  return (
    <section className="mb-12 rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
            className="w-full rounded-xl border border-cyan-200 bg-cyan-50 py-3 pl-12 pr-4 text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3">
          <select className="rounded-xl border border-cyan-200 bg-white px-4 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 cursor-pointer hover:border-cyan-300">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select className="rounded-xl border border-cyan-200 bg-white px-4 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 cursor-pointer hover:border-cyan-300">
            <option>Country</option>
          </select>

          <select className="rounded-xl border border-cyan-200 bg-white px-4 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 cursor-pointer hover:border-cyan-300">
            <option>Sort</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
            <option>Age ↑</option>
            <option>Age ↓</option>
          </select>

          <button
            onClick={onRefresh}
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
