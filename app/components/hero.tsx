import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

const buttonStyle = "bg-purple-500 rounded-lg p-2 text-white hover:bg-purple-700"

export default function Hero() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
            <div className="flex">
                <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
                    Pointing<span className="text-purple-300">Poker</span>
                </h1>
                <img src="/cards.svg" alt="Poker Cards" width={128} height={128} />
            </div>
            <LoginSection />
            <div className="py-4" />
            <div className="w-3/5">
                <p>Welcome to pointing poker (aka planning poker)! Online, virtual and
                    co-located agile teams use this application during their planning/pointing
                    sessions to effectively communicate points for stories.
                </p>
            </div>
            <div className="p-4" />
            <section>
                <div className="border rounded-lg bg-white p-4">
                    <h3 className="text-gray-700 font-medium text-xl">Pointing Session</h3>
                    <div className="p-1" />
                    <div className="flex justify-center items-center space-x-4">
                        <button className={buttonStyle}>Create Sesh</button>
                        <p>..or..</p>
                        <form className="w-auto justify-end">
                            <input className="border p-1 m-1 outline-none focus:border-purple-500" placeholder="123abc"></input>
                            <button className={buttonStyle}>Join Sesh</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

function LoginSection() {
    const user = useOptionalUser();
    return (
        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
        {user ? (
            <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-purple-700 shadow-sm hover:bg-purple-50 sm:px-8"
            >
                View Notes for {user.email}
            </Link>
        ) : (
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <Link
                    to="/join"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-purple-700 shadow-sm hover:bg-purple-50 sm:px-8"
                >
                    Sign up
                </Link>
                <Link
                    to="/login"
                    className="flex items-center justify-center rounded-md bg-purple-500 px-4 py-3 font-medium text-white hover:bg-purple-600"
                >
                    Log In
                </Link>
            </div>
        )}
    </div>
    )
}