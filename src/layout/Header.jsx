import React, { useEffect, useState } from "react";

function Header() {
  const [mod, setMod] = useState(localStorage.getItem("theme") === "light");

  useEffect(() => {
    toggleDarkMod();
  }, [mod]);
  const toggleDarkMod = () => {
    if (!mod) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="z-50 fixed justify-center flex flex-col top-0 left-0 right-0 pb-[40px]">
      {/* header top */}
      <a
        href="#"
        className="flex items-center sticky top-0 justify-center gap-x-2 bg-violet-700 w-full h-[40px] md:h-[68px] font-MorabbaMedium tracking-normal text-sm md:text[22px]"
      >
        <h3 className="text-white">
          {" "}
          به انتهای افق بنگر؛ من و تو باید پرچم خودمان را آنجا بزنیم، در انتهای
          افق ..
        </h3>
      </a>
      {/* backdrop-blur-xl bg-white/30 */}
      <header className="md:inline-block hidden">
        {/* header main */}
        <div className="mt-[31px] hidden md:flex justify-between md:container items-center gap-x-10 ">
          {/* logo */}
          <div className="flex">
            <div className="shrink-0 ">
              <img
                className="h-[55px] dark:hidden inline-block bg-cover"
                src="../assets/images/logo.png"
                alt="ofoghkca"
              />

              <img
                className="h-[55px] hidden dark:inline-block bg-cover"
                src="../assets/images/logodark.png"
                alt="ofoghkca"
              />
            </div>

            {/* search */}
            <div className=" relative flex items-center">
              <input
                type="text"
                placeholder="بگو چی میخوای تا برات پیداش کنم ..."
                className="rounded-full w-[484px] h-[55px] px-8 outline-none mr-7 dark:bg-zinc-500 dark:placeholder-white bg-zinc-100"
              />
              <a
                href="#"
                className="absolute flex items-center justify-center left-2.5 bg-orange-300 rounded-full w-[38px] h-[38px]"
              >
                <svg className="text-white h-6 w-6">
                  <use href="#search"></use>
                </svg>
              </a>
            </div>
          </div>
          {/* box */}
          <div className="flex justify-center items-center gap-10">
            <div className="flex items-center gap-x-3">
              <div>
                <span className="flex items-center justify-center w-[43px] h-[43px] border-[3.5px] dark:border-violet-600 border-violet-700 rounded-xl p-1">
                  <svg className="text-violet-700 dark:text-violet-600 h-6 w-6">
                    <use href="#check"></use>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col items-start dark:text-white text-black">
                <h3 className="font-DanaDemiBold">رسالت این مؤسسه</h3>
                <span className="text-black/[26%] dark:text-white/[26%]">
                  حمایت از سرمایه ها
                </span>
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <div>
                <span className="flex items-center justify-center">
                  <svg className="text-violet-700  dark:text-violet-600 w-[50px] h-[50px] ">
                    <use href="#star"></use>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col items-start  dark:text-white text-black">
                <h3 className="font-DanaDemiBold">رویکرد این مؤسسه</h3>
                <span className="text-black/[26%]  dark:text-white/[26%]">
                  شناسایی افراد نخبه
                </span>
              </div>
            </div>
          </div>

          {/* cart */}
          <div className="flex gap-x-[29px] items-center justify-center">
            <a href="#">
              <div className="relative">
                <svg className="h-[43px] w-[43px] dark:text-white text-black ">
                  <use href="#shop"></use>
                </svg>
                <span className="absolute right-0 top-0 flex items-center justify-center left-2.5 bg-orange-300 text-white p-px  rounded-full w-[22px] h-[22px]">
                  3
                </span>
              </div>
            </a>

            {/* dark mode */}
            <div className="cursor-pointer" onClick={() => setMod(!mod)}>
              <svg className="h-[43px] w-[43px]  dark:text-white text-black inline-block dark:hidden">
                <use href="#moon-icon"></use>
              </svg>

              <svg className="h-[43px] w-[43px] dark:text-white text-black  hidden dark:inline-block">
                <use href="#sun-icon"></use>
              </svg>
            </div>

            {/* login */}
            <a href="#">
              <svg className="h-[43px] w-[43px] dark:text-white text-black ">
                <use href="#login"></use>
              </svg>
            </a>
          </div>
        </div>
        {/* sub header */}
        <div className="flex justify-between dark:text-white text-black items-center md:container mt-[57px]">
          {/* menu        */}
          <div>
            <nav>
              <ul className="flex gap-x-[31px] font-DanaDemiBold  text-xl">
                <li>
                  <a
                    href="#"
                    className="flex dark:text-violet-600 text-violet-700 gap-x-px"
                  >
                    خانه
                    <svg className="h-6 w-6">
                      <use href="#arrow-b"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">ارائه طرح</a>
                </li>
                <li>
                  <a href="#" className="flex gap-x-px">
                    رویدادها
                    <svg className="h-6 w-6">
                      <use href="#arrow-b"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">اخبار</a>
                </li>
                <li>
                  <a href="#">درباره ما</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* phone */}
          <div className="flex gap-x-2.5 items-center font-DanaDemiBold text-xl">
            <div>
              <svg className="h-[30px] w-[30px]">
                <use href="#phone"></use>
              </svg>
            </div>
            <div>
              شماره تماس:{" "}
              <span className="text-violet-700 dark:text-violet-600">
                32257071-035
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* header mobile */}

      <header className="inline-block md:hidden">
        <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/15 shadow w-full h-20 flex justify-between items-center px-8">
          <div>
            <a href="#">
              <div>
                <svg className="h-[30px] w-[30px] dark:text-white text-black ">
                  <use href="#menu"></use>
                </svg>
              </div>
            </a>
          </div>

          <div className="shrink-0 ">
            <img
              className="h-[40px] dark:hidden inline-block bg-cover"
              src="../assets/images/logo.png"
              alt="ofoghkca"
            />

            <img
              className="h-[40px] hidden dark:inline-block bg-cover"
              src="../assets/images/logodark.png"
              alt="ofoghkca"
            />
          </div>

          <div>
            <a href="#">
              <div className="relative">
                <svg className="h-[30px] w-[30px] dark:text-white text-black ">
                  <use href="#shop"></use>
                </svg>
                <span className="absolute right-0 top-0 flex items-center justify-center left-2.5 bg-orange-300 text-white p-px  rounded-full w-[22px] h-[22px]">
                  3
                </span>
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
