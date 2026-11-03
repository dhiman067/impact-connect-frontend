import ManageEvents from '@/components/ManageEvents';
import { auth } from '@/lib/auth';
import { Itypes } from '@/type';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const ManageEventPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user =  session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/manageEvent/${user?.email}`)
    const data:Itypes[] = await res.json()

    return (
        <div>
             <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8 sm:py-10 lg:px-16">
            <section className="mx-auto max-w-7xl border-b border-slate-200 pb-7 sm:pb-8">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3.5 py-1.5 text-xs font-bold text-violet-700">
                            <span aria-hidden="true">⚙</span>
                            Event Organizer
                        </span>
                        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                            Your Community Drives
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                            Keep track of the initiatives you have started and continue creating meaningful change in your community.
                        </p>
                    </div>

                    <Link
                        href="/createEventForm"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-700 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
                    >
                        <span aria-hidden="true" className="text-lg leading-none">⊕</span>
                        Add New Event
                    </Link>
                </div>
            </section>
            <section className="mx-auto grid max-w-7xl gap-6 py-8 sm:grid-cols-2 sm:py-10 lg:grid-cols-3">
                {data.map((event) => (
                    <ManageEvents key={event._id} manageEventData={event} />
                ))}
            </section>
        </main>
        </div>
    );
};

export default ManageEventPage;