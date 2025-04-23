import Image from "next/image";

export default function nod() {
  return (
    <section className="w-full">
      <div className="mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-12">

          {/* Illustration */}
          <div className="relative w-full">
            {/* Desktop Illustration */}
            <div className="hidden lg:block">
              <div className="relative w-[1720px] h-[1068px] mx-auto">
                <Image
                  src="/images/nod-web.png"
                  alt="Nod Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Mobile Illustration */}
            <div className="lg:hidden">
              <div className="relative w-full max-w-[351px] h-[384px] mx-auto">
                <Image
                  src="/images/nod-mobile.png"
                  alt="Nod Illustration"
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