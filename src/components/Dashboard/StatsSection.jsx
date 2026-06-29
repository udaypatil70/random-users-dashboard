import { FaUsers, FaMale, FaFemale, FaGlobeAsia } from "react-icons/fa";

import StatCard from "./StatCard";

const StatsSection = ({
  totalUsers,
  maleUsers,
  femaleUsers,
  totalCountries,
}) => {
  return (
    <section className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Users"
        value={totalUsers}
        icon={<FaUsers className="text-2xl text-cyan-600" />}
        iconBg="bg-gradient-to-br from-cyan-100 to-cyan-50"
        valueColor="text-cyan-600"
        borderColor="border-cyan-200"
      />

      <StatCard
        title="Male"
        value={maleUsers}
        icon={<FaMale className="text-2xl text-emerald-600" />}
        iconBg="bg-gradient-to-br from-emerald-100 to-emerald-50"
        valueColor="text-emerald-600"
        borderColor="border-emerald-200"
      />

      <StatCard
        title="Female"
        value={femaleUsers}
        icon={<FaFemale className="text-2xl text-rose-600" />}
        iconBg="bg-gradient-to-br from-rose-100 to-rose-50"
        valueColor="text-rose-600"
        borderColor="border-rose-200"
      />

      <StatCard
        title="Countries"
        value={totalCountries}
        icon={<FaGlobeAsia className="text-2xl text-amber-600" />}
        iconBg="bg-gradient-to-br from-amber-100 to-amber-50"
        valueColor="text-amber-600"
        borderColor="border-amber-200"
      />
    </section>
  );
};

export default StatsSection;
