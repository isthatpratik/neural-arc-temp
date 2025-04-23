import Image from "next/image";

export default function OrbTabs() {
  return (
    <section className="w-full pb-10">
      <div className="mx-auto px-6">
        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="relative w-[1716px] h-[1056px] mx-auto">
            <Image
              src="/images/tabs-web.png"
              alt="ORB Features"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden">
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/tabs-mobile.png"
              alt="ORB Features"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 