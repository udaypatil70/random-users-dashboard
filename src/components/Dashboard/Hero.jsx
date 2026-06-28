const Hero = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
        <span className="text-lg">👋</span>
        Welcome to UserHub
      </div>

      <h2 className="mt-6 text-5xl sm:text-6xl font-bold leading-tight text-slate-900">
        Discover & Explore
        <span className="block bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent mt-2">
          Global Users
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
        Browse randomly generated user profiles from across the world. Explore,
        search, filter and connect with users seamlessly.
      </p>
    </section>
  );
};

export default Hero;
