import Image from "next/image";
import Link from "next/link";

export default function Home() {
  {
    return (
      <div className="row align-middle full-width-row">
        <div className="grid grid-cols-3 items-center w-full">
          <div>
            <Link href="/quiz">
              <button className="text-2xl">
                Home
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <h1 className="tracking-[.3em] text-2xl sm:text-3xl font-bold text-center">
              David Lavis
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
