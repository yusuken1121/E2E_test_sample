import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageB() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1>Page B</h1>
          <Link href="/page-e">
            <Button>Go to Page E</Button>
          </Link>
          <Link href="/page-f">
            <Button>Go to Page F</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
