import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Orb() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Illustration */}
          <div className="w-full">
            {/* Desktop Illustration */}
            <div className="hidden lg:block">
              <div className="relative w-[1716px] h-[1056px] mx-auto">
                <Image
                  src="/images/orb-web.png"
                  alt="Orb Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Mobile Illustration */}
            <div className="lg:hidden">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/images/orb-mobile.png"
                  alt="Orb Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 