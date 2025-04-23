import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative w-full">
          {/* Desktop Image */}
          <div className="hidden lg:block">
            <Image
              src="/images/hero-web.png"
              alt="NeuralArc Hero"
              width={1858}
              height={1019}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          
          {/* Mobile Image */}
          <div className="lg:hidden">
            <Image
              src="/images/hero-mobile.png"
              alt="NeuralArc Hero"
              width={343}
              height={384}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 