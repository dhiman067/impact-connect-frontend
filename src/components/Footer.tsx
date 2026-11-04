import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-violet-200/70 bg-base-100">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-16">
                <div>
                    <Link href="/" className="inline-flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-700 text-white shadow-lg shadow-violet-200">
                            <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5 11 15l4.5-6" />
                            </svg>
                        </span>
                        <span>
                            <span className="block text-lg font-bold tracking-tight text-violet-950">
                                Impact<span className="text-violet-600">Connect</span>
                            </span>
                            <span className="block text-xs text-slate-500">Creating Impact</span>
                        </span>
                    </Link>
                    <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
                        Connecting people with meaningful community initiatives and creating lasting positive change together.
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-violet-950">Explore</h2>
                    <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                        <Link href="/events" className="transition hover:text-violet-700">Upcoming Events</Link>
                        <Link href="/createEventForm" className="transition hover:text-violet-700">Create an Event</Link>
                        <Link href="/manageEvents" className="transition hover:text-violet-700">Manage Events</Link>
                    </nav>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-violet-950">Get Involved</h2>
                    <p className="mt-4 text-sm leading-6 text-slate-500">
                        Join a local drive, volunteer your time, and help build a stronger community.
                    </p>
                    <Link
                        href="/events"
                        className="mt-4 inline-flex items-center rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
                    >
                        Find an Event
                    </Link>
                </div>
            </div>

            <div className="border-t border-violet-100">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
                    <p>© {new Date().getFullYear()} ImpactConnect. All rights reserved.</p>
                    <p>Made for communities that care.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
