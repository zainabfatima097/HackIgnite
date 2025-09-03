export default function TimelineItem({ title, date, desc }) {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-ignite-500"></div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-1 text-gray-700">{desc}</p>
    </div>
  );
}
