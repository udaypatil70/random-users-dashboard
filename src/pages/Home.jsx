import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-10">

          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-800">
              Discover Random Users
            </h2>

            <p className="mx-auto max-w-2xl text-slate-600">
              Browse randomly generated user profiles. Search, filter, and
              explore people from different countries using the FreeAPI Random
              Users API.
            </p>
          </section>

          {/* Statistics Cards Placeholder */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">100</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">Male</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">50</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">Female</h3>
              <p className="mt-2 text-3xl font-bold text-pink-500">50</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">Countries</h3>
              <p className="mt-2 text-3xl font-bold text-green-600">25</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;