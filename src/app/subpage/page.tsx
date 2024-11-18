import Link from 'next/link';

export default function Subpage() {
  return (
    <div>
      <h1 className="text-4xl">Subpage</h1>
      <div>
        <Link href="/">Go to Homepage</Link>
      </div>
    </div>
  );
}
