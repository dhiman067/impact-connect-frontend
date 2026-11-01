import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-500 text-white container mx-auto lg:mt-4 lg:rounded-2xl">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-violet-100">
            <span className="h-2 w-2 rounded-full bg-fuchsia-300" />
            Small actions. Shared progress.
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Turn your ideas into{" "}
            <span className="text-fuchsia-300">lasting impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-violet-100 sm:text-lg">
            Find people who care about the same causes, join meaningful local
            projects, and make every hour you give count.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="group rounded-full bg-fuchsia-200 px-6 py-3.5 text-sm font-bold text-violet-950 shadow-lg shadow-violet-950/20 transition duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-fuchsia-200/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-100 focus:ring-offset-2 focus:ring-offset-violet-700"
            >
              <span className="inline-flex items-center gap-2">
                Explore Upcoming Events
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            <Link
              href="/createEventForm"
              className="group rounded-full border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition duration-300 ease-out hover:-translate-y-1 hover:border-white hover:bg-white hover:text-violet-950 hover:shadow-lg hover:shadow-violet-950/20 focus:outline-none focus:ring-2 focus:ring-violet-100 focus:ring-offset-2 focus:ring-offset-violet-700"
            >
              <span className="inline-flex items-center gap-2">
                <span className="transition-transform duration-300 group-hover:rotate-12">
                  +
                </span>
                Create An Event
              </span>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-4 -top-5 h-24 w-24 rounded-3xl border border-fuchsia-300/30 bg-fuchsia-300/10" />
          <div className="absolute -bottom-5 -left-4 h-20 w-20 rounded-full border border-violet-300/30 bg-violet-400/20" />
          <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-violet-950/50 backdrop-blur-md">
            <div className="rounded-3xl bg-violet-50 p-6 text-violet-950">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-violet-500">
                    Featured this week
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    Neighborhood
                    <br />
                    Garden Day
                  </h2>
                </div>
                <span className="rounded-2xl bg-fuchsia-100 px-3 py-2 text-center text-xs font-bold text-fuchsia-700">
                  JUN
                  <strong className="block text-2xl leading-6">14</strong>
                </span>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-violet-100 pt-5 text-sm">
                <span className="text-violet-500">Greenway Community Hub</span>
                <span className="font-bold text-violet-700">18 spots</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pt-5 text-sm text-violet-100">
              <span>Join 42 neighbors making a difference</span>
              <span className="text-lg">→</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-2xl font-black text-fuchsia-300">1,280+</p>
              <p className="mt-1 text-xs font-medium text-violet-100">
                Active Volunteers
              </p>
            </div>
            <div className="translate-y-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-2xl font-black text-violet-200">96</p>
              <p className="mt-1 text-xs font-medium text-violet-100">
                Events Completed
              </p>
            </div>
            <div className="translate-y-2 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-2xl font-black text-fuchsia-200">8,400+</p>
              <p className="mt-1 text-xs font-medium text-violet-100">
                Lives Impacted
              </p>
            </div>
            <div className="translate-y-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-2xl font-black text-violet-200">100%</p>
              <p className="mt-1 text-xs font-medium text-violet-100">
                Community Driven
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;