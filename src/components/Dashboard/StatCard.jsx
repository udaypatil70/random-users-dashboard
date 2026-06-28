const StatCard = ({ title, value, icon, iconBg, valueColor, borderColor }) => {
  return (
    <div
      className={`rounded-2xl border ${borderColor || "border-slate-200"} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-opacity-50 overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            {title}
          </p>

          <h3 className={`text-4xl font-bold ${valueColor}`}>{value}</h3>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
