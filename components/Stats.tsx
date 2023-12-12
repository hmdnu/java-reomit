import { stats } from "@/constant";

export default function Stats() {
  return (
    <div className="flex">
      {stats.map((stat, i) => (
        <div className="w-full text-white" key={i}>
          <div className={`${i % 2 == 0 ? "bg-themeGray" : "bg-themeRed"} p-[48px] w-full`}>
            <h1 className="text-h1 font-bold mb-1">{stat.heading}</h1>
            <h2 className="text-h4 font-bold">{stat.sub}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}