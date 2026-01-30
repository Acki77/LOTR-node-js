import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  if (!volume) return null;

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.title}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
    </div>
  );
}
