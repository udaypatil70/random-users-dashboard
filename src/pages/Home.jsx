import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";

import UserGrid from "../components/users/UserGrid";

import { fetchUsers } from "../services/randomUserApi";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-10">

          <section className="mb-10 text-center">
            <h2 className="text-4xl font-bold">
              Discover Random Users
            </h2>

            <p className="mt-3 text-slate-500">
              Browse random users fetched from FreeAPI.
            </p>
          </section>

          {loading && <Loader />}

          {error && <ErrorMessage message={error} />}

          {!loading && !error && (
            <UserGrid users={users} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;