import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Fellowship() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) return null;

  return (
    <div>
      <Head>All Volumes</Head>
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
