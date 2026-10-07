import SiteLogo from "@/app/ui/site-logo";
import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Iniciar sesión",
};

export default function LoginPage() {
   return (
      <main className="flex items-center justify-center md:h-screen">
         <div className="relative mx-auto flex w-full max-w-[400px] flex-col p-4 gap-2">
            <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-4 md:h-36">
               <div className="w-full text-white md:w-36">
                  <SiteLogo />
               </div>
            </div>
            <Suspense>
               <LoginForm />
            </Suspense>
         </div>
      </main>
   );
}

