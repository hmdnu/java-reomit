"use client";
import { useRef, useState } from "react";
import { DaftarKesenian, DaftarKuliner, DaftarTradisi } from "..";

export default function BudayaCategory() {
  const [category, setCategory] = useState("Kesenian");
  const buttonRef = useRef<Array<HTMLButtonElement | null>>([]);
  const budayaCategory = ["Kesenian", "Kuliner", "Tradisi"];

  function handleGetCategoryName(index: number) {
    setCategory(buttonRef.current[index]?.innerHTML ?? "");
  }

  return (
    <div className="mt-20">
      {/* navigation */}
      <div className="flex justify-center items-center gap-5">
        {budayaCategory.map((name, i) => (
          <button
            key={i}
            ref={(e) => (buttonRef.current[i] = e)}
            onClick={() => handleGetCategoryName(i)}
            className="font-semibold text-h5 grid gap-5 border-b-2 cursor-pointer hover:border-red-400 focus:border-red-400"
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mt-5">
        {category === "Kesenian" ? <DaftarKesenian category={category} /> : null}
        {category === "Kuliner" ? <DaftarKuliner category={category} /> : null}
        {category === "Tradisi" ? <DaftarTradisi category={category} /> : null}
      </div>
    </div>
  );
}
