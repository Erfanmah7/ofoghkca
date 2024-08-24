import React, { useState } from "react";
import { sp } from "../utils/number";

function FormPage() {
  const [form, setForm] = useState({
    name: "",
    number: null,
    approved: null,
    notpaid: null,
    paid: null,
  });

  const changeHandler = (e) => {
    const name = e.target.name;

    setForm({ ...form, [name]: e.target.value });
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log({ form });
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="coin-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </symbol>

        <symbol
          id="like"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </symbol>

        <symbol
          id="not-paid"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </symbol>
      </svg>

      <form
        className="rounded-md shadow-sm bg-white border-zinc-200 border dark:border-zinc-500 py-5 dark:bg-zinc-700 mt-48"
        onChange={changeHandler}
      >
        <div className="grid md:grid-cols-3 gap-3 justify-center md:p-5 dark:text-white">
          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="name">
              نام طرح<span className="text-violet-700">*</span>
            </label>
            <input
              className="py-2 w-96 px-2 rounded-md  border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5  focus:outline-none"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="number">
              شماره طرح<span className="text-violet-700">*</span>
            </label>
            <input
              className="py-2 w-96 px-2 rounded-md  border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 focus:outline-none"
              type="number"
              name="number"
              id="number"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="approved">
              مبلغ مصوب شده<span className="text-violet-700">*</span>
            </label>
            <input
              className="py-2 w-96 px-2 border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="number"
              name="approved"
              id="approved"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="notpaid">
              مبلغ پرداخت نشده<span className="text-violet-700">*</span>
            </label>
            <input
              className="py-2 w-96 px-2 border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="number"
              name="notpaid"
              id="notpaid"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="paid">
              مبلغ پرداخت شده<span className="text-violet-700">*</span>
            </label>
            <input
              className="py-2 w-96 px-2 border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="number"
              name="paid"
              id="paid"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>
        </div>

        <button
          className="py-2 w-96 px-5 rounded-md bg-violet-700 hover:bg-violet-800 text-white my-5"
          onClick={addHandler}
        >
          ارسال طرح
        </button>
      </form>

      <div className="rounded-md shadow-sm bg-white dark:text-white border-zinc-200 dark:border-zinc-500 border py-5 mt-3 flex flex-col h-20 justify-center  dark:bg-zinc-700">
        <div className="flex flex-col space-y-1 justify-center items-center">
          <label className="flex items-center gap-x-2" htmlFor="paid">
            <svg className="h-4 w-4">
              <use href="#coin-icon"></use>
            </svg>
            جمع کل پرداختی ها:
            <span className="bg-gray-50 dark:bg-zinc-600 py-2 px-3 rounded-md font-DanaDemiBold">
              265,000 تومان
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 justify-between ">
        <div className="rounded-md shadow-sm bg-white border-zinc-200 border dark:border-zinc-500 dark:text-white flex flex-col h-20 justify-center mt-3 px-3  dark:bg-zinc-700">
          <div className="flex flex-col space-y-1 justify-center items-center">
            <label className="flex items-center gap-x-2" htmlFor="paid">
              {" "}
              <svg className="h-4 w-4">
                <use href="#not-paid"></use>
              </svg>
              پرداخت نشده:
              <span className="bg-gray-50 dark:bg-zinc-600  py-2 px-3 rounded-md font-DanaDemiBold">
                {sp(+form.notpaid)}
                <span className="hidden md:inline-block mr-1">تومان</span>
              </span>
            </label>
          </div>
        </div>

        <div className="rounded-md shadow-sm bg-white border-zinc-200 border dark:border-zinc-500 dark:text-white flex flex-col h-20 justify-center mt-3 px-3  dark:bg-zinc-700">
          <div className="flex flex-col space-y-1 justify-center items-center">
            <label className="flex items-center gap-x-2" htmlFor="paid">
              <svg className="h-4 w-4">
                <use href="#like"></use>
              </svg>
              تصویب شده:
              <span className="bg-gray-50 dark:bg-zinc-600 py-2 px-3 rounded-md font-DanaDemiBold">
                {sp(+form.approved)}
                <span className="hidden md:inline-block mr-1">تومان</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPage;
