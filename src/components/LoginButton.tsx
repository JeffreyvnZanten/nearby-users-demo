"use client";

type LoginButtonProps = {
  onClick: () => void;
};

export default function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button
      className="w-full py-[0.7em] bg-black text-white rounded-[0.5em]"
      onClick={onClick}
    >
      Login
    </button>
  );
}
