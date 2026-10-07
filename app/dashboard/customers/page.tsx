import CustomersTable from "@/app/ui/customers/table";
import { montserrat } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
   title: "Clientes",
};

export default async function CustomersPage({
   searchParams,
}: {
   searchParams?: Promise<{ query?: string; page?: string }>;
}) {
   const resolvedSearchParams = await searchParams;
   const query = resolvedSearchParams?.query || "";

   return (
      <div className="w-full">
         <h1 className={`${montserrat.className} mb-8 text-xl md:text-2xl`}>
            Clientes
         </h1>
         <Search placeholder="Buscar clientes..." />
         <Suspense key={query} fallback={<CustomersTableSkeleton />}>
            <CustomersTable query={query} />
         </Suspense>
      </div>
   );
}
