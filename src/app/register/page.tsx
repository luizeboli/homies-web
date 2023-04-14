import { SignUp } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="grid h-full place-items-center">
      <SignUp
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
          },
          elements: {
            footerActionLink: "text-pink-500",
          },
        }}
      />
    </div>
  );
}
