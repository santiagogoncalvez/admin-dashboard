import SiteLogo from "@/app/ui/site-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./ui/home.module.css";
import { montserrat } from "./ui/fonts";
import Image from "next/image";

export default function Page() {
   return (
      <main className="flex min-h-screen flex-col p-4">
         <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
            <SiteLogo />

            <div></div>
         </div>
         <div className="mt-2 flex grow flex-col gap-4 md:flex-row">
            <div
               className={`flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-3/5 md:px-16 ${styles.homeCard}`}
            >
               <p
                  className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
               >
                  <strong className={`${montserrat.className}`}>
                     Bienvenido al Panel de Administración.
                  </strong>{" "}
                  Esta es una implementación hecha por{" "}
                  <a
                     href="https://santiagogoncalvez.com"
                     className="text-blue-500"
                     target="_blank"
                  >
                     Santiago Goncalvez
                  </a>
               </p>
               <Link
                  href="/login"
                  className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
               >
                  <span>Iniciar sesión</span>{" "}
                  <ArrowRightIcon className="w-5 md:w-6" />
               </Link>
            </div>
            <div className="relative flex items-center justify-center p-6 md:w-2/5 md:px-20 md:py-12">
               <div className="relative hidden overflow-hidden rounded-lg border border-gray-200 md:block">
                  <Image
                     src="/hero-desktop.png"
                     alt="Capturas de pantalla del panel"
                     width={1000}
                     height={562}
                     className="h-auto w-full"
                  />
               </div>

               <div className="relative block overflow-hidden rounded-lg border border-gray-200 md:hidden">
                  <Image
                     src="/hero-mobile.png"
                     alt="Capturas de pantalla del panel"
                     width={560}
                     height={996}
                     className="h-auto w-full"
                  />
               </div>

               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white md:h-2/4" />
            </div>
         </div>
      </main>
   );
}
