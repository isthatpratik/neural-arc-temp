import Image from "next/image";

export default function NodTabs() {
  return (
    <section className="w-full">
      <div className="mx-auto px-6">
        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="relative w-[1716px] h-[1494px] mx-auto">
            <Image
              src="/images/nod-tabs.png"
              alt="NOD Features"
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
              alt="NOD Features"
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