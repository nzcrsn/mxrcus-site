import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero">
        <p className="eyebrow">404 / Archive</p>
        <h1>This story is not here.</h1>
        <p className="lede"><Link className="text-link" href="/stories/">Return to stories</Link></p>
      </section>
    </main>
  );
}
