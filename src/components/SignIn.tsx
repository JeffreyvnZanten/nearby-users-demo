"use client";

import { authClient } from "@/auth-client";
// import Link from "next/link";
import GoogleButton from "./GoogleButton";
import CustomInputField from "./CustomInputField";
import LoginButton from "./LoginButton";

export default function SignIn() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center justify-center min-h-[10vh] max-w-[24em] gap-[1em]">
        <h1 className="text-[1.6rem] p-[1em] ">Login or create an account</h1>

        <GoogleButton
          onClick={() =>
            authClient.signIn.social({
              provider: "google",
              callbackURL: "/",
            })
          }
        />

        <p>or</p>

        <CustomInputField title="EMAIL" onChange={() => {}} />

        <CustomInputField title="PASSWORD" onChange={() => {}} />

        <LoginButton onClick={() => {}} />

        <div className="flex flex-row gap-[1em]">
          <strong className="text-gray-400">No Account?</strong>
          {/* <Link href="/sign-up">
            <strong className="text-blue-400">Create One</strong>
          </Link> */}
          <a href="/sign-up" className="text-blue-400 font-semibold">
            Create One
          </a>
        </div>
      </div>
    </div>
  );
}
