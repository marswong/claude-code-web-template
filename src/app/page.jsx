import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center">
      <Image
        className="dark:invert"
        src="/opengraph-image.jpg"
        alt="OG image"
        width={1200}
        height={630}
        priority
      />
    </main>
  );
}
