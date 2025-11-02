import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageA() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1>Page A</h1>
          <Link href="/page-c">
            <Button>Go to Page C</Button>
          </Link>
          <Link href="/page-d">
            <Button>Go to Page D</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
