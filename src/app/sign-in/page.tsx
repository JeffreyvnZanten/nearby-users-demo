import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
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
      <SignIn />
    </div>
  );
}
