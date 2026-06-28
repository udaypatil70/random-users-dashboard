import {
  FaUsers,
  FaMale,
  FaFemale,
  FaGlobeAsia,
} from "react-icons/fa";

import StatCard from "./StatCard";

const StatsSection = () => {
  return (
    <section className="my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Users"
        value="100"
        icon={<FaUsers className="text-2xl text-blue-600" />}
        iconBg="bg-blue-100"
        valueColor="text-blue-600"
      />

      <StatCard
        title="Male"
        value="52"
        icon={<FaMale className="text-2xl text-green-600" />}
        iconBg="bg-green-100"
        valueColor="text-green-600"
      />

      <StatCard
        title="Female"
        value="48"
        icon={<FaFemale className="text-2xl text-pink-600" />}
        iconBg="bg-pink-100"
        valueColor="text-pink-600"
      />

      <StatCard
        title="Countries"
        value="20"
        icon={<FaGlobeAsia className="text-2xl text-orange-600" />}
        iconBg="bg-orange-100"
        valueColor="text-orange-600"
      />
    </section>
  );
};

export default StatsSection;