import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/dashboard/Hero";
import StatsSection from "../components/dashboard/StatsSection";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";

import UserGrid from "../components/users/UserGrid";

import { fetchUsers } from "../services/randomUserApi";
import SearchToolbar from "../components/dashboard/SearchToolbar";
import UserModal from "../components/users/UserModal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openProfile = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeProfile = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-slate-50">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-10">
          <Hero />

          <StatsSection />

          <SearchToolbar />

          <section className="mt-10">
            {loading && <Loader />}

            {!loading && error && <ErrorMessage message={error} />}

            {!loading && !error && <UserGrid users={users} />}
          </section>
        </div>
      </main>

      <Footer />
      <UserModal 
       user={selectedUser} 
       isOpen={isModalOpen} 
       onClose={closeProfile} />
    </>
  );
};

export default Home;
