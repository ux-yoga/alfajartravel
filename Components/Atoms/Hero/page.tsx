import Image from "next/image";

export default function HeroImage() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "60vh" }}>
      <Image
        src="/Heroimage/Heroimage.jpg"
        alt="Hero Image"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}