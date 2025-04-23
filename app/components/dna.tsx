import Image from "next/image";

export default function DNA() {
  return (
    <section className="w-full pb-10">
      <div className="mx-auto px-6">
        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="relative w-[1858px] h-[1054px] mx-auto">
            <Image
              src="/images/dna-web.png"
              alt="DNA Features"
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
              src="/images/dna-mobile.png"
              alt="DNA Features"
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