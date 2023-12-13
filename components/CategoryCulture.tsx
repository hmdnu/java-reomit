import { categoryHome } from "@/constant";

export default function CategoryCulture() {
  return (
    <section className="h-screen w-full flex justify-center items-center my-[100px]">
      <div className="grid grid-cols-2 grid-rows-2 gap-[40px]">
        <div className={`w-[448px] h-[209.5px] flex flex-col justify-between`}>
          <h1 className="font-bold text-h1">Berbagai Jenis Warisan Budaya</h1>
          <div className="w-full h-[10px] bg-themeRed rounded-[50px]"></div>
        </div>

        {categoryHome.map((category, i) => (
          <div key={i} className={`w-[448px] h-[209.5px] rounded-[20px] bg-carousel1 bg-cover`}>
            <div className="w-[448px] h-[209.5px] bg-[rgba(0,0,0,.3)] rounded-[20px] grid place-content-center">
              <h1 className="font-bold text-h3 text-white">{category.heading}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
