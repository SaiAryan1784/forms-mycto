import Link from "next/link";


export default function Home() {
  return (
    <div>
      <p className="text-center">
        Home
      </p>
      <Link href="/form1" className="px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Fill up Form - 1
      </Link>
    </div>
  )
}
