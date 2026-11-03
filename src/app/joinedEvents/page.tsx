import JoinedEvent from '@/components/joinedEvent';
import { auth } from '@/lib/auth';
import { Itypes } from '@/type';
import { headers } from 'next/headers';
import React from 'react';

const JoinedEventPage = async() => {
     const session = await auth.api.getSession({
            headers: await headers()
        })
        const user =  session?.user
        const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/joinedEvent/${user?.email}`)
            const data:Itypes[] = await res.json()
            
    return (
        <div>
           
  <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8 sm:py-10 lg:px-16">
    <section className="mx-auto max-w-7xl border-b border-slate-200 pb-7 sm:pb-8">
      <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3.5 py-1.5 text-xs font-bold text-violet-700">
        <span aria-hidden="true">✓</span>
        My Volunteer Commitments
      </span>

      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        Joined Events
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
        Here are all the social development and community service drives you
        have signed up for, sorted by event date.
      </p>
    </section>
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-8 sm:grid-cols-2 sm:py-10 lg:grid-cols-3">
    {data.map((d) => (
        <JoinedEvent key={d._id} joinedEventData={d} />
    ))}
</div>
  </main>
        </div>
    );
};

export default JoinedEventPage;