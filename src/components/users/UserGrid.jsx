import UserCard from "./UserCard";

const UserGrid = ({ users, onViewProfile }) => {
  return (
    <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserCard
          key={user.login.uuid}
          user={user}
          onViewProfile={onViewProfile}
        />
      ))}
    </section>
  );
};

export default UserGrid;
