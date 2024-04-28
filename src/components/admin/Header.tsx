import Link from "next/link"

export const Header = () => {
  return (
    <div className="flex justify-between px-10 p-5 bg-green-400">
        <div className="flex gap-10">
            <Link href={"/"} className="text-white text-xl font-bold">Home</Link>
            <Link href={"/"} className="text-white text-xl font-bold">information</Link>
        </div>
        <div className="text-white text-xl font-bold">
            profile
        </div>
    </div>
  )
}

