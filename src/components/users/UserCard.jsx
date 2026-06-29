import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

const UserCard = ({ user }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-200">
      {/* Cover */}
      <div className="h-20 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 group-hover:scale-105 transition-transform duration-300" />

      {/* Avatar */}
      <div className="-mt-12 flex justify-center">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      {/* Name */}
      <div className="px-6 pt-4 text-center">
        <h3 className="text-lg font-bold text-slate-800">
          {user.name.first} {user.name.last}
        </h3>

        <p className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-500 truncate">
          <FiMail className="flex-shrink-0" size={14} />
          <span className="truncate">{user.email}</span>
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-cyan-50" />

      {/* Details */}
      <div className="space-y-3 px-6 text-sm pb-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500 font-medium">
            <FiUser className="text-cyan-500" size={16} />
            Gender
          </span>

          <span className="font-semibold capitalize text-slate-800 bg-cyan-50 px-3 py-1 rounded-lg">
            {user.gender}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500 font-medium">
            🎂 Age
          </span>

          <span className="font-semibold text-slate-800 bg-teal-50 px-3 py-1 rounded-lg">
            {user.dob.age} Yrs
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500 font-medium">
            <FiPhone className="text-emerald-500" size={16} />
            Phone
          </span>

          <span className="font-semibold text-slate-700 text-xs truncate max-w-[120px]">
            {user.phone}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-500 font-medium">
            <FiMapPin className="text-rose-500" size={16} />
            Country
          </span>

          <span className="font-semibold text-slate-800 bg-amber-50 px-3 py-1 rounded-lg text-xs">
            {user.location.country}
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="px-6 pb-6">
        <button
          onClick={() => onViewProfile(user)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View Profile
        </button>
      </div>
    </article>
  );
};

export default UserCard;
