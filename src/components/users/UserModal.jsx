import { FiX, FiMail, FiPhone, FiMapPin, FiUser } from "react-icons/fi";

const UserModal = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-slate-100"
        >
          <FiX size={24} />
        </button>

        {/* Header */}
        <div className="rounded-t-3xl bg-gradient-to-r from-blue-600 to-indigo-600 py-10 text-center">

          <img
            src={user.picture.large}
            alt={user.name.first}
            className="mx-auto h-28 w-28 rounded-full border-4 border-white"
          />

          <h2 className="mt-4 text-3xl font-bold text-white">
            {user.name.first} {user.name.last}
          </h2>

          <p className="text-blue-100">
            {user.email}
          </p>

        </div>

        {/* Body */}
        <div className="grid gap-4 p-8 md:grid-cols-2">

          <Info
            icon={<FiUser />}
            label="Username"
            value={user.login.username}
          />

          <Info
            icon={<FiMail />}
            label="Email"
            value={user.email}
          />

          <Info
            icon={<FiPhone />}
            label="Phone"
            value={user.phone}
          />

          <Info
            icon={<FiUser />}
            label="Gender"
            value={user.gender}
          />

          <Info
            icon={"🎂"}
            label="Age"
            value={`${user.dob.age} Years`}
          />

          <Info
            icon={<FiMapPin />}
            label="Country"
            value={user.location.country}
          />

          <Info
            icon={"🏙️"}
            label="City"
            value={user.location.city}
          />

          <Info
            icon={"📍"}
            label="Address"
            value={`${user.location.street.number}, ${user.location.street.name}`}
          />

          <Info
            icon={"📮"}
            label="Postcode"
            value={user.location.postcode}
          />

          <Info
            icon={"📅"}
            label="Registered"
            value={new Date(user.registered.date).toLocaleDateString()}
          />

        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

const Info = ({ icon, label, value }) => {
  return (
    <div className="rounded-xl border border-slate-200 p-4">

      <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
        {icon}
        {label}
      </div>

      <div className="font-semibold text-slate-800">
        {value}
      </div>

    </div>
  );
};

export default UserModal;