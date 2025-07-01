import Link from "next/link";
import CustomInputField from "./CustomInputField";
import LoginButton from "./LoginButton";
import OAuthButton from "./OAuthButton";

export default function SignIn() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center justify-center min-h-[10vh] max-w-[24em] gap-[1em]">
        <h1 className="text-[1.6rem] p-[1em] ">Login or create an account</h1>

        <OAuthButton
          social="google"
          logoURL="/assets/GoogleLogo.svg"
          redirectTo="/"
        />
        <OAuthButton
          social="facebook"
          logoURL="/assets/GoogleLogo.svg"
          redirectTo="/"
        />

        <p>or</p>

        <CustomInputField title="EMAIL" />

        <CustomInputField title="PASSWORD" />

        <LoginButton />

        <div className="flex flex-row gap-[1em]">
          <strong className="text-gray-400">No Account?</strong>
          <Link href="/sign-up">
            <strong className="text-blue-400">Create One</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
