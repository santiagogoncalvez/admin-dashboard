"use client";

import { montserrat } from "@/app/ui/fonts";

import {
   AtSymbolIcon,
   KeyIcon,
   ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { useActionState, useState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
   const searchParams = useSearchParams();
   const callbackUrl = searchParams.get("callbackUrl") || `/dashboard`;

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [errorMessage, formAction, isPending] = useActionState(
      authenticate,
      undefined,
   );

   return (
      <form className="" action={formAction}>
         <style>{`
            @keyframes nativeSpin {
               from { transform: rotate(0deg); }
               to { transform: rotate(360deg); }
            }
            .spin-custom {
               animation: nativeSpin 1s linear infinite !important;
               display: inline-block;
            }
         `}</style>
         <div className="flex-1 rounded-lg bg-gray-50 p-8">
            <h1 className={`${montserrat.className} mb-3 text-2xl`}>
               Iniciá sesión para continuar.
            </h1>
            <div className="w-full">
               <div>
                  <label
                     className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                     htmlFor="email"
                  >
                     Correo electrónico
                  </label>
                  <div className="relative">
                     <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Ingresá tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                     <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
               </div>
               <div className="mt-4">
                  <label
                     className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                     htmlFor="password"
                  >
                     Contraseña
                  </label>
                  <div className="relative">
                     <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Ingresá tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                     />
                     <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
               </div>
            </div>

            <div className="mt-4 rounded-md bg-gray-100 px-4 py-3 text-sm">
               <p className="font-medium text-gray-900">Cuenta de demostración</p>
               <p className="text-gray-600">
                  Correo: <span className="font-mono">user@nextmail.com</span>
               </p>
               <p className="text-gray-600">
                  Contraseña: <span className="font-mono">123456</span>
               </p>
               <button
                  type="button"
                  onClick={() => {
                     setEmail("user@nextmail.com");
                     setPassword("123456");
                  }}
                  className="mt-2 text-sm font-medium text-blue-600 hover:underline"
               >
                  Usar cuenta de demostración
               </button>
            </div>

            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <Button
               className="flex justify-center mt-4 w-full"
               aria-disabled={isPending}
            >
               {isPending ? (
                  <Loader2 className="h-5 w-5 spin-custom" />
               ) : (
                  <>
                     <span>Iniciar sesión</span>
                     <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                  </>
               )}
            </Button>

            {/* Add form errors here */}
            {errorMessage && (
               <div className="flex h-8 items-end space-x-1">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
               </div>
            )}
         </div>
      </form>
   );
}
