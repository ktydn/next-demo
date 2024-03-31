import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Top Page</h1>
      <Link href="/layout-test">layout-test</Link><br />
      <Link href="/loading-test">loading-test</Link><br />
      <Link href="/page-test">page-test</Link><br />
      <Link href="/template-test">template-test</Link><br />
    </div>
  );
}
