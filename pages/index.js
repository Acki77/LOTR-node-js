import { introduction } from "../lib/data";
import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>Lord of the Rings</Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes">Go to Volumes Overview</Link>
        </li>
      </ul>
    </div>
  );
}
