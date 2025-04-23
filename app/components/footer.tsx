import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[631px] mx-auto">
            <Image
              src="/images/footer-web.png"
              alt="Footer Features"
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
              src="/images/footer-mobile.png"
              alt="Footer Features"
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