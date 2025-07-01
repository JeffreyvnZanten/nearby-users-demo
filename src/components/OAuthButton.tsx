"use client";

import { authClient } from "@/auth-client";
import { capitalizeFirst } from "@/helpers";

type OAuthButtonProps = {
  redirectTo: string;
  social: "google" | "facebook";
  logoURL: string;
};

function OAuthButton({ redirectTo, social, logoURL }: OAuthButtonProps) {
  return (
    <button
      className={`
        flex items-center justify-center
        gap-[1em]
        bg-white hover:bg-gray-100
        w-full
        border border-gray-300
        rounded-md
        py-[0.7em] px-[2em]
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500
        text-sm font-medium text-gray-700
        transition-colors duration-150
      `}
      aria-label={`Continue with ${social}`}
      onClick={async () => {
        try {
          console.log("Starting Facebook login...");
          const result = await authClient.signIn.social({
            provider: "facebook",
            callbackURL: redirectTo,
          });
          console.log("Login result:", result);
        } catch (error) {
          console.error("Facebook login error:", error);
        }
      }}
    >
      <img src={logoURL} width="20" height="8" />
      <span>Continue with {capitalizeFirst(social)}</span>
    </button>
  );
}

export default OAuthButton;
