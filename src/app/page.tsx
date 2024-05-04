import Link from "next/link";


export default function Home() {
  return (
    <div>
      <p className="text-center">
        Home
      </p>
      <Link href="/form1" className="text-black bg-slate-200 hover:bg-slate-600 hover:text-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center m-[2rem]">
        Fill up Form - 1
      </Link><Link href="/forms4" className="text-black bg-slate-200 hover:bg-slate-600 hover:text-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center m-[2rem]">
        Fill up Form - 4
      </Link>
    </div>
  )
}
