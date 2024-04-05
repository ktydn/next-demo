import Link from 'next/link';
import { Roboto } from 'next/font/google'
const Roboto900 = Roboto({ weight:'900', preload:false })

export default function Page() {
  return (
    <div>
      <h1 className={Roboto900.className}>Top Page</h1>
      <Link href="/api/login">login</Link><br />
      <Link href="/layout-test">layout-test</Link><br />
      <Link href="/loading-test">loading-test</Link><br />
      <Link href="/page-test">page-test</Link><br />
      <Link href="/template-test">template-test</Link><br />
    </div>
  );
}
