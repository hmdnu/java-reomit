import { categoryHome } from "@/constant";

export default function CategoryCulture() {
  return (
    <section className="md:h-screen sm:w-full w-[310px] flex justify-center items-center sm:my-[100px] gap-1 m-10 sm:mr-20">
      <div className="grid grid-cols-2 grid-rows-2 gap-5 sm:gap-[40px]">
        <div className={`w-[160px] sm:w-[448px] h-[160px] md:h-[209.5px] flex flex-col justify-between`}>
          <h1 className="font-bold text-h4 sm:text-h1 w-[150px] sm:w-full">Berbagai Jenis Warisan Budaya</h1>
          <div className="w-[140px] sm:w-full h-[5px] md:h-[10px] bg-themeRed rounded-[50px]"></div>
        </div>

        {categoryHome.map((category, i) => (
          <div
            key={i}
            className={`w-full sm:w-[448px] h-[160px] md:h-[209.5px] bg-right rounded-[20px] bg-carousel1 bg-cover`}
          >
            <div className="w-full sm:w-[448px] h-[160px] md:h-[209.5px] bg-[rgba(0,0,0,.3)] rounded-[20px] grid place-content-center">
              <h1 className="font-bold text-h5 text-center sm:text-h3 p-5 text-white">{category.heading}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
