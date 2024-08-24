import React from "react";

function HomePage() {
  return (
    <div className="mt-[246px] flex flex-col justify-center md:container">
      <div
        href="#"
        className="relative w-full flex justify-center h-[461px] bg-zinc-100  rounded-[42px] overflow-hidden"
      >
        <img
          className="absolute bottom-0  text-white w-40 z-20"
          src="../assets/svg/toggle.svg"
        />

        <a href="#" className="bottom-0 absolute flex justify-center">
          <svg className="z-30 h-[30px] w-[30px] rounded-full p-1 bg-violet-700 text-white">
            <use href="#arrow-b"></use>
          </svg>
        </a>

        <div className="-bottom-20 absolute z-10">
          <div className="circle circle-lg">
            <div className="circle circle-md">
              <div className="circle circle-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-10 gap-x-[33px] text-xl font-DanaMedium">
        <div className="rounded-[20px]  bg-violet-100  h-[99px] flex justify-between items-center px-8">
          <svg className="z-30 h-14 w-14 p-1">
            <use href="#education"></use>
          </svg>
          <h3>آموزش و ورکشاپ</h3>
          <a href="#">
            <svg className="z-30 h-10 w-10 rounded-full p-1 bg-violet-700 text-white rotate-90">
              <use href="#arrow-b"></use>
            </svg>
          </a>
        </div>

        <div className="rounded-[20px]  bg-orange-100 h-[99px] flex justify-between items-center px-8">
          <svg className="z-30 h-14 w-14 p-1">
            <use href="#art"></use>
          </svg>
          <h3>فرهنگی و هنری</h3>
          <a href="#">
            <svg className="z-30 h-10 w-10 rounded-full p-1 bg-orange-300 text-white rotate-90">
              <use href="#arrow-b"></use>
            </svg>
          </a>
        </div>

        <div className="rounded-[20px]  bg-indigo-100 h-[99px] flex justify-between items-center px-8">
          <svg className="z-30 h-14 w-14 p-1">
            <use href="#media"></use>
          </svg>
          <h3>رسانه و ارتباطات</h3>
          <a href="#">
            <svg className="z-30 h-10 w-10 rounded-full p-1 bg-indigo-400 text-white rotate-90">
              <use href="#arrow-b"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
