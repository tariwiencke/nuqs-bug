import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <div>
        <Link href="/subpage">Go to Subpage</Link>
      </div>
    </div>
  );
}
