import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/dashboard/Hero";
import StatsSection from "../components/dashboard/StatsSection";
import SearchToolbar from "../components/dashboard/SearchToolbar";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";

import UserGrid from "../components/users/UserGrid";
import UserModal from "../components/users/UserModal";

import { fetchUsers } from "../services/randomUserApi";

const Home = () => {
 
  // State

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Users

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Modal Functions
  const openProfile = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeProfile = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };


  // Search
  const filteredUsers = users.filter((user) => {
    const fullName =
      `${user.name.first} ${user.name.last}`.toLowerCase();

    const email = user.email.toLowerCase();

    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase())
    );
  });

  // Dashboard Statistics

  const totalUsers = users.length;

  const maleUsers = users.filter(
    (user) => user.gender === "male"
  ).length;

  const femaleUsers = users.filter(
    (user) => user.gender === "female"
  ).length;

  const totalCountries = new Set(
    users.map((user) => user.location.country)
  ).size;

  // JSX
  
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-slate-50">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">

          {/* Hero */}
          <Hero />

          {/* Statistics */}
          <StatsSection
            totalUsers={totalUsers}
            maleUsers={maleUsers}
            femaleUsers={femaleUsers}
            totalCountries={totalCountries}
          />

          {/* Search Toolbar */}
          <SearchToolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onRefresh={loadUsers}
          />

          {/* Content */}
          <section className="mt-10">

            {loading && <Loader />}

            {!loading && error && (
              <ErrorMessage message={error} />
            )}

            {!loading &&
              !error &&
              (filteredUsers.length > 0 ? (
                <UserGrid
                  users={filteredUsers}
                  onViewProfile={openProfile}
                />
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-700">
                    No Users Found
                  </h2>

                  <p className="mt-3 text-slate-500">
                    Try searching with another name or email.
                  </p>
                </div>
              ))}
          </section>
        </div>
      </main>

      <Footer />

      {/* User Profile Modal */}
      <UserModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={closeProfile}
      />
    </>
  );
};

export default Home;