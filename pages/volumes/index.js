import Link from "next/link";
import Head from "next/head";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function Volumes() {
  return (
    <>
      <Head>List of all Volumes</Head>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volumes.id}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
              <br />
              <Image
                src={volume.cover}
                alt={volume.title}
                width={70}
                height={115}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
