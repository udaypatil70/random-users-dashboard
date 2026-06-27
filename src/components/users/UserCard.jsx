const UserCard = ({ user }) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="mx-auto h-28 w-28 rounded-full object-cover"
      />

      <h3 className="mt-4 text-center text-xl font-bold">
        {user.name.first} {user.name.last}
      </h3>

      <p className="mt-2 text-center text-slate-500">
        {user.email}
      </p>

      <div className="mt-5 space-y-2 text-sm">
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Country:</strong> {user.location.country}
        </p>

        <p>
          <strong>Age:</strong> {user.dob.age}
        </p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;