export default function TodaysSalesCard({ icon, number, title, details }) {
  return (
    <div>
      <div className="from-primary-400 to-primary-700 h-full w-40 space-y-2 rounded-lg bg-gradient-to-b px-5 py-4 text-white">
        <div className="mb-5 w-10 rounded-full bg-white p-3 text-primary">
          {icon}
        </div>
        <p>{number}</p>
        <p className="text-sm">{title}</p>
        <p className="text-[10px]">{details}</p>
      </div>
    </div>
  );
}
