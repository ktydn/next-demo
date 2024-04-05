import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <p>Profile Page</p>
      {!user ? (
        <p>ユーザー情報が取得できていません。。。</p>
      ) : (
        <>
          <div>
            <img
              src={user.image ? user.image : "/images/default.png"}
              className="max-h-36"
              alt={`profile photo of ${user.name}`}
            />
          </div>
          <div className="mt-8">
            <p className="mb-3">Name: {user.name}</p>
            <p className="mb-3">Email: {user.email}</p>
          </div>
        </>
      )}
    </>
  );
}