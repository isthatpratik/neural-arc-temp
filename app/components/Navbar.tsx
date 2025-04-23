import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="max-w-[1920px] mx-auto px-6 py-4 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/neural-arc.svg"
          alt="NeuralArc Logo"
          width={100}
          height={100}
          priority
          className="object-contain w-20 h-10"
        />
      </Link>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full px-8 py-5 bg-[#C1BBB4] shadow-[0_4px_0_0_#6B5B4D] hover:shadow-[0_2px_0_0_#6B5B4D] hover:bg-[#C1BBB4]"
        >
          <div className="flex flex-col gap-1">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </Button>

        <Button
          className="rounded-full px-8 py-5 bg-[#2F2C28] text-white shadow-[0_4px_0_0_#C6AEA3] hover:shadow-[0_2px_0_0_#C6AEA3] hover:bg-[#2F2C28]"
        >
          Sign in
        </Button>
      </div>
    </nav>
  );
} 