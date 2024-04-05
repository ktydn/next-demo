import Link from 'next/link';
import { Roboto } from 'next/font/google'
const Roboto900 = Roboto({ weight:'900', preload:false })

export default function Page() {
  return (
    <div>
      <h1 className={Roboto900.className}>Top Page</h1>
      <Link href="/api/login">login</Link><br />
      <Link href="/test/layout-test">layout-test</Link><br />
      <Link href="/test/loading-test">loading-test</Link><br />
      <Link href="/test/page-test">page-test</Link><br />
      <Link href="/test/template-test">template-test</Link><br />
    </div>
  );
}
