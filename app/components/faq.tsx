import Image from "next/image";

export default function FAQ() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto px-6">
        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="relative w-[1538px] h-[851px] mx-auto">
            <Image
              src="/images/faq-web.png"
              alt="FAQ Features"
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
              src="/images/faq-mobile.png"
              alt="FAQ Features"
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