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
    <div className="container mt-[30px] md:mt-[115px]">
      <form
        className="rounded-md shadow-sm bg-white border-zinc-200 border dark:border-zinc-500 py-5 dark:bg-zinc-700"
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
    </div>
  );
}

export default FormPage;
