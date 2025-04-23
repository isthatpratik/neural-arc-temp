import Image from "next/image";

export default function Suite() {
  return (
    <section className="w-full pb-10">
      <div className="mx-auto px-6">
        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="relative w-[1716px] h-[802px] mx-auto">
            <Image
              src="/images/suite-web.png"
              alt="Suite Features"
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
              src="/images/suite-mobile.png"
              alt="Suite Features"
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