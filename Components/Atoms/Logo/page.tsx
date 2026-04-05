import Image from "next/image";

type LogoProps = {
  src?: string;
  alt?: string;
};

export default function Logo({
  src = "/logo-alfajar.png",
  alt = "Logo Al-Fajar",
}: LogoProps) {
  return (
    <div>
      <Image src={src} alt={alt} width={70} height={50} className="object-contain" />
    </div>
  );
}
