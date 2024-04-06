"use client";

import { signIn } from "next-auth/react"; // 1⃣
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile"; // 2⃣

  return (
    <button onClick={() => signIn("google", { callbackUrl })}>
      Login With Google
    </button>
  );
}