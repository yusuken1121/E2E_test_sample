"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PageC() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => setIsClicked(!isClicked);
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1>Page C</h1>
      <Button onClick={handleClick}>
        {isClicked ? "Clicked" : "Click me"}
      </Button>
    </div>
  );
}
