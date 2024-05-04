"use client";
import { useAuth } from "@/auth/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInfo = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/login");
  };

  return (
    <div>
      {auth ? (
        <>
          <div className="flex justify-center items-center gap-4">
            <span className="text-gray-900 font-bold">
              Hi, {auth?.firstName}
            </span>
            <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
              <Link onClick={logout} href="/login">
                Logout
              </Link>
            </li>
          </div>
        </>
      ) : (
        <Link href="/login">
          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            Login
          </li>
        </Link>
      )}
    </div>
  );
};

export default UserInfo;
