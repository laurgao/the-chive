import UpSEO from "../components/UpSeo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-800 text-white w-screen h-screen inset-0 absolute z-40 flex items-center ">
      <UpSEO />
      <div className="max-w-4-xl text-center mx-auto ">
        <p className="text-6xl opacity-70">The Chive</p>
        <p className="text-xl opacity-50">Canada's Finest Writing</p>
        <Link href="/home"><a><p className="uppercase opacity-20 hover:opacity-70 transition">Enter</p></a></Link>
      </div>
    </div>
  )
}