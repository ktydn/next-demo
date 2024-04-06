import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";
import "@/app/profile-template.css";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="writer-profile-card">
      <div className="wp-left">
        <div className="wp-label">
          <p>自己紹介</p>
        </div>
        <div className="wp-img">
          {user ? (
            <Image
              src={user.image ? user.image : "/images/default.png"}
              width={100}
              height={100}
              alt={`profile photo of ${user.name}`}
            />
          ) : (
            <p>画像がありません</p>
          )}
        </div>
        <p className="wp-name">
          {user ? user.name : "ユーザー情報が取得できていません"}
        </p>
      </div>
      <div className="wp-right">
        <div className="ul-center">
          <ul>
            {user ? (
              <>
                <li className="li-point">名前: {user.name}</li>
                <li className="li-point">Email: {user.email}</li>
                {/* 他のユーザー情報を表示する */}
              </>
            ) : (
              <li className="li-point">ユーザー情報が取得できていません</li>
            )}
          </ul>
        </div>
        <ul className="wp-sns">
          <li>
            <a href="ここにリンク先URL">
              <i className="fa fa-link" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
