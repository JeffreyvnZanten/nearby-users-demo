import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="border-1 flex flex-col items-center justify-center min-h-[10vh] w-[20em]">
        Sign-up
      </div>
    </div>
  );
}
