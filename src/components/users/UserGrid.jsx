import UserCard from "./UserCard";

const UserGrid = ({ users }) => {
  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </section>
  );
};

export default UserGrid;