import { Link } from "react-router"


export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-screen-line bg-transparent">
            <div className="mx-auto max-w-content px-6 pb-20 pt-14 sm:pb-28 sm:pt-20">
                <div className="mx-auto mt-10 max-w-2xl text-center">
                    <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-violet-dim">
                        Now showing
                    </p>
                    <h1 className="mt-4 font-display text-5xl font-semibold leading-normal text-paper sm:text-6xl">
                        Discover your next
                        <br />
                        <span className="italic text-violet">favourite Movies</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-md text-base text-paper-muted sm:text-lg">
                        Browse thousands of shows, search for the titles you love, and pull up the details before you press play.
                    </p>
                    <div className="mt-9 flex justify-center">
                        <Link to="/movies" className="inline-flex items-center rounded-sm bg-violet px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-screen transition-transform hover:-translate-y-0.5">
                            Explore now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
