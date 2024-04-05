import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Suspenseをインポート

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <button onClick={() => signIn("google", { callbackUrl })}>
      Login With Google
    </button>
  );
}
