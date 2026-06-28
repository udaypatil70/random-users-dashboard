import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

const UserCard = ({ user }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Cover */}
      <div className="h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      {/* Avatar */}
      <div className="-mt-12 flex justify-center">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>

      {/* Name */}
      <div className="px-6 pt-4 text-center">
        <h3 className="text-xl font-bold text-slate-800">
          {user.name.first} {user.name.last}
        </h3>

        <p className="mt-1 flex items-center justify-center gap-2 text-sm text-slate-500">
          <FiMail />
          {user.email}
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-slate-100" />

      {/* Details */}
      <div className="space-y-4 px-6 text-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500">
            <FiUser />
            Gender
          </span>

          <span className="font-semibold capitalize text-slate-800">
            {user.gender}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500">
            🎂 Age
          </span>

          <span className="font-semibold text-slate-800">
            {user.dob.age} Years
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500">
            <FiPhone />
            Phone
          </span>

          <span className="font-semibold text-slate-800">
            {user.phone}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500">
            <FiMapPin />
            Country
          </span>

          <span className="font-semibold text-slate-800">
            {user.location.country}
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="p-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700">
          View Profile
          <FiArrowRight />
        </button>
      </div>
    </article>
  );
};

export default UserCard;