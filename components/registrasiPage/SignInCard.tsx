import { reog } from "@/public/images/budaya";
import Image from "next/image";

export default function SignInCard() {
  return (
    <div className="flex mt-32">
      <div className="flex sm:m-auto sm:w-[500px] sm:h-[500px]">
        <div className="p-5 absolute sm:relative bg-white bg-opacity-50">
          <h1 className="text-h3 md:text-h2  font-semibold text-black">Registrasi</h1>
          <p className="text-h6 md:text-h5 text-black  font-medium mb-10">
            Untuk Menikmati Pertunjukkan Seni yang Anda Inginkan
          </p>
          <form>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email..."
                className="bg-transparent border-2 border-gray-500 rounded-lg p-2 outline-none block w-full text-grayborder-gray-500"
              />
            </div>
            <div className="mb-10">
              <input
                type="password"
                placeholder="Password..."
                className="bg-transparent border-2 border-gray-500 rounded-lg p-2 outline-none block w-full text-grayborder-gray-500"
              />
            </div>
            <div className="mb-5 flex justify-between items-center">
              <button className="block w-[50%] py-[10px] rounded-[6px] bg-themeRed font-medium text-h6 sm:text-h5 text-white">
                Daftar
              </button>
              <a href="#" className="text-h7 text-fontBlue">
                Lupa Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Image src={reog} alt="reog" className="sm:rounded-lg"></Image>
      </div>
    </div>
  );
}
