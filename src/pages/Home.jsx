import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/dashboard/Hero";
import StatsSection from "../components/dashboard/StatsSection";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";

import UserGrid from "../components/users/UserGrid";

import { fetchUsers } from "../services/randomUserApi";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          {/* Hero Section */}
          <Hero />

          {/* Dashboard Statistics */}
          <StatsSection />

          {/* Search Toolbar (Coming Next) */}
          {/* <SearchToolbar /> */}

          {/* Content */}
          <section className="mt-10">
            {loading && <Loader />}

            {!loading && error && (
              <ErrorMessage message={error} />
            )}

            {!loading && !error && (
              <UserGrid users={users} />
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;