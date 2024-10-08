import React from "react";

function HomePage() {
  return (
    <div className="md:mt-[70px] container mt-[30px] mb-4 flex flex-col justify-center md:container">
      {/* banner */}
      <div
        href="#"
        className="bg-cover bg-no-repeat md:relative w-full flex justify-center h-[461px] bg-zinc-200  md:rounded-[42px] rounded-[10px] overflow-hidden"
      >
        <svg className="hidden md:inline-block z-30 md:absolute -bottom-14 w-36 dark:text-zinc-700 text-white">
          <use href="#curev"></use>
        </svg>

        <a href="#" className="bottom-0 absolute hidden md:flex justify-center">
          <svg className="z-30 h-[30px] w-[30px] rounded-full p-1 bg-violet-700 text-white">
            <use href="#arrow-b"></use>
          </svg>
        </a>

        <div className="-bottom-20 hidden md:inline-block absolute z-10">
          <div className="circle circle-lg">
            <div className="circle circle-md">
              <div className="circle circle-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* boxs */}

      <div className="grid md:grid-cols-3 grid-cols-1 mt-6 md:mt-10 gap-y-3 md:gap-x-[33px] text-xl font-DanaMedium">
        <div className="rounded-[10px]  bg-violet-100  h-[70px] flex justify-between items-center px-8">
          <svg className="z-30 h-14 w-14 p-1 md:inline-block hidden">
            <use href="#education"></use>
          </svg>
          <h3>آموزش و ورکشاپ</h3>
          <a href="#">
            <svg className="z-30 h-10 w-10 rounded-full p-1 bg-violet-700 text-white rotate-90">
              <use href="#arrow-b"></use>
            </svg>
          </a>
        </div>

        <div className="rounded-[10px]  bg-orange-100 h-[70px] flex justify-between items-center px-8">
          <svg className="z-30 h-14 w-14 p-1 md:inline-block hidden">
            <use href="#art"></use>
          </svg>
          <h3>فرهنگی و هنری</h3>
          <a href="#">
            <svg className="z-30 h-10 w-10 rounded-full p-1 bg-orange-300 text-white rotate-90">
              <use href="#arrow-b"></use>
            </svg>
          </a>
        </div>

        <div className="rounded-[10px]  bg-indigo-100 h-[70px] flex justify-between items-center px-8">
          <svg className="z-30 h-14 w-14 p-1 md:inline-block hidden">
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

      {/* box card */}

      <div className="w-full relative h-[389px] rounded-[25px] text-white bg-violet-700 mt-[41px] mb-[264px]">
        <h3 className="mt-[90px] text-2xl mb-8 font-DanaMedium">
          متا فراتر از هر تابستان
        </h3>
        <div className="flex justify-center items-center mb-[75px]">
          <span className="bg-orange-300 h-1 w-[150px] flex rounded-full"></span>
        </div>

        <div className="flex flex-col md:flex-row absolute -bottom-25 right-0 left-0 justify-center mx-24 items-center md:gap-x-[43px] gap-y-6">
          <div className="bg-white text-black w-[320px] h-[304px] rounded-[18px] shadow-md flex flex-col items-center justify-center px-7 pt-[49px] pb-[54px]">
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-gradient-to-t to-orange-300 from-white">
              <svg className="z-30 h-10 w-10 translate-y-7">
                <use href="#moon-icon"></use>
              </svg>
            </div>
            <h3 className="mb-4 mt-[54px]">ارائه متدهای جدید کسب و کار</h3>
            <p className="text-gray-400">
              بررسی حوزه فعالیت و ارائه روش‌های نوین
            </p>
          </div>

          <div className="flex">
            <div className="bg-white text-black z-30 w-[320px] h-[304px] rounded-[18px] shadow-md flex flex-col items-center justify-center px-7 pt-[49px] pb-[54px]">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-gradient-to-t to-orange-300 from-white">
                <svg className="z-30 h-10 w-10 translate-y-7">
                  <use href="#moon-icon"></use>
                </svg>
              </div>
              <h3 className="mb-4 mt-[54px]">ارائه متدهای جدید کسب و کار</h3>
              <p className="text-gray-400">
                بررسی حوزه فعالیت و ارائه روش‌های نوین
              </p>
            </div>
            <div className="z-20 hidden md:inline-block bg-white/20 dark:bg-zinc-700/20 absolute -rotate-12 w-[320px] h-[304px] rounded-[18px]"></div>
          </div>

          <div className="bg-white text-black w-[320px] h-[304px] rounded-[18px] shadow-md flex flex-col items-center justify-center px-7 pt-[49px] pb-[54px]">
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-gradient-to-t to-orange-300 from-white">
              <svg className="z-30 h-10 w-10 translate-y-7">
                <use href="#moon-icon"></use>
              </svg>
            </div>
            <h3 className="mb-4 mt-[54px]">ارائه متدهای جدید کسب و کار</h3>
            <p className="text-gray-400">
              بررسی حوزه فعالیت و ارائه روش‌های نوین
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
