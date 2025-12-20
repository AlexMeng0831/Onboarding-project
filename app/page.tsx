import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-white">
      <Image
        src="/me.jpg"
        alt="Photo of Alex"
        width={320}
        height={320}
        className="rounded-full object-cover shadow-md"
      />

      <h1 className="text-4xl font-bold text-black">
        Alex Meng
      </h1>

      <p className="text-lg text-gray-600 max-w-xl text-center leading-relaxed">
        I’m currently a Math-CS student at UC San Diego, where I’ve developed a
        strong interest in quantitative problem solving and building software
        systems. I enjoy working at the intersection of mathematics and computer
        science, and I’m particularly interested in software engineering and
        quantitative roles, where I can explore challenging problems and continue
        to grow as a programmer.
      </p>
    </main>
  );
}
