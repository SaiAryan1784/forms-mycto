import Link from "next/link";
import prisma from "@/prisma";
import { redirect } from "next/navigation";
import Image from "next/image";

const Page = () => {
  return (
    <body
      style={{ backgroundImage: `url(/bgimg2.jpg)`, backgroundSize: "cover" }}
    >
      <Link
        href="/"
        className=" text-black bg-slate-200 hover:bg-slate-600 hover:text-slate-200 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-lg w-full lg:w-auto px-6 py-2.5 text-center m-[5.2rem] "
      >
        ⬅️ Return to HomePage
      </Link>
      <div className="bg-slate-200 justify-between rounded-lg flex p-20 m-20 bg-opacity-70">
        <div className="flex justify-center items-center">
          <Image src="/image.png" alt="Image" width={440} height={12} />
        </div>
        <div className="border-2 rounded-lg p-t-15 p-10 shadow-lg m-5 items-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4  hover:text-blue-600 items-center">
            Join Us Now 👋
          </h1>
          <p className="text-20px">
            Unlock premium content and exclusive offers by subscribing today!
            Join our community and stay updated with the latest news and
            promotions!
          </p>
          <button className="bg-gray-600 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded-full mt-5 items-center mb-5">
            📝 Sign Up on Google
          </button>
          <div>
            <form>
              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700 appearance-none"
                >
                  First & Last Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border-slate-700 border-b-2 rounded-m bg-transparent shadow-sm focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border-slate-700 border-b-2 rounded-m bg-transparent shadow-sm focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border-slate-700 border-b-2 rounded-m bg-transparent shadow-sm focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex justify-between ">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    className="h-5 w-5 "
                  />
                  <label htmlFor="checkbox" className=" ml-5 text-gray-900 ">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold mt-5 px-6 py-2 rounded-md hover:bg-teal-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Page;
