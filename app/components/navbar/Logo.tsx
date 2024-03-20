"use client";
import Image from "next/image";
import { Original_Surfer } from "next/font/google";
import { useRouter } from "next/navigation";

const surfer = Original_Surfer({ subsets: ["latin"], weight:"400" });

const Logo = () => {
  const router = useRouter();

  

  return (
    <div className=" relative h-20 w-fit md:w-36  overflow-hidden flex items-center cursor-pointer" onClick={() => router.push("/")}>
      <Image
        className=" z-30 min-w-[30px]"
        src="/logoInn.png"
        height="40"
        width="40"
        alt="Logo"
      />
      <h1 className={"text-dark-brown  absolute hidden md:block  left-[40px] top-1/2 -translate-y-1/2 text-xl font-semibold " + surfer.className }>
        Lodg<span className=" text-brand">İnn</span>
      </h1>
    </div>
  );
};

export default Logo;
