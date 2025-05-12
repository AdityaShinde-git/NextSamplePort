// components/Hero.tsx

import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={image}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl opacity-80">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
