import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="grid h-full place-items-center">
      <SignIn
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
          },
          elements: {
            footerActionLink: "text-pink-500 hover:text-pink-600",
            formFieldAction__password: "text-pink-500 hover:text-pink-600",
            headerBackLink: "text-pink-500 hover:text-pink-600",
            headerBackIcon: "text-pink-500 hover:text-pink-600",
          },
        }}
      />
    </div>
  );
}
