const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-200 border-t-cyan-600"></div>
      <p className="mt-4 text-slate-600 font-medium">Loading users...</p>
    </div>
  );
};

export default Loader;
