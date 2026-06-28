const Hero = () => {
  return (
    <section className="py-14">

      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        👋 Welcome Back
      </span>

      <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">

        Discover

        <span className="text-blue-600">
          {" "}Random Users
        </span>

      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        Browse randomly generated user profiles from different countries.
        Search, filter and explore users using the FreeAPI Random Users API.

      </p>

    </section>
  );
};

export default Hero;