import UserCard from "./UserCard";

const UserGrid = ({ users }) => {
  return (
    <section className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </section>
  );
};

export default UserGrid;
