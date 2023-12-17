"use client";
import { useState } from "react";
import Kesenian from "./Kesenian";
import Kuliner from "./Kuliner";
import Tradisi from "./Tradisi";

export default function Gallery() {
  const MenuGallery = () => {
    const [menu, setMenu] = useState("Kuliner");
    let galleryComponent;

    if (menu == "Kuliner") {
      galleryComponent = <Kuliner />;
    } else if (menu == "Kesenian") {
      galleryComponent = <Kesenian />;
    } else if (menu == "Tradisi") {
      galleryComponent = <Tradisi />;
    }

    return (
      <div>
        <nav className="mb-8">
          <ul className="flex gap-5 justify-center">
            <button
              onClick={() => setMenu("Kuliner")}
              className="grid gap-5 border-b-2 cursor-pointer hover:border-red-400 focus:border-red-400"
            >
              Kuliner
            </button>
            <button
              onClick={() => setMenu("Kesenian")}
              className="grid gap-5 border-b-2 cursor-pointer hover:border-red-400 focus:border-red-400"
            >
              Kesenian
            </button>
            <button
              onClick={() => setMenu("Tradisi")}
              className="grid gap-5 border-b-2 cursor-pointer hover:border-red-400 focus:border-red-400"
            >
              Tradisi
            </button>
          </ul>
        </nav>
        <div>{galleryComponent}</div>
      </div>
    );
  };

  return (
    <main>
      <MenuGallery />
    </main>
  );
}
