"use client";
import { stats } from "@/constant";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section>
      <div className="flex w-full sm:mt-48 md:mt-0">
        {stats.map((stat, i) => (
          <div className="w-[200px] sm:w-full text-white" key={i}>
            <div className={`${i % 2 == 0 ? "bg-themeGray" : "bg-themeRed"} p-[20px] sm:p-[48px] w-full`}>
              <h1 className="text-h2 sm:text-h1 font-bold mb-1">
                <CountUp end={parseInt(stat.heading)} duration={3} />+
              </h1>
              <h2 className="text-h7 sm:text-h4 font-bold">{stat.sub}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
