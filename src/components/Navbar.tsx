'use client'
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";


const Navbar = () => {

const { data: session, error } =  useSession()
const user = session?.user
console.log(user);

  return (
    <header className="border-b border-violet-200/70 bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-700 text-white shadow-lg shadow-violet-200">
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 12.5 11 15l4.5-6"
              />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-violet-950">
            Impact<span className="text-violet-600">Connect</span>
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <Link
            href="/events"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-violet-800 transition hover:bg-violet-50 hover:text-violet-950"
          >
            Upcoming Events
          </Link>
        </div>

        

        {
          user? <button
         onClick={()=> signOut()}
          className="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        >
          signout
        </button> : <Link
          href="/login"
          className="rounded-full bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        >
          Login
        </Link>
        }
      </nav>
    </header>
  );
};

export default Navbar;