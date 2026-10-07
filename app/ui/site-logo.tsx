import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { montserrat } from "@/app/ui/fonts";

export default function SiteLogo() {
   return (
      <div
         className={`${montserrat.className} flex flex-row items-center leading-none text-white`}
      >
         <GlobeAltIcon className="size-8 rotate-[15deg]" />
         <p className="md:text-3xl text-xl">Admin Dashboard</p>
      </div>
   );
}

