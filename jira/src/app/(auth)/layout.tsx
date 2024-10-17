"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface AuthLayoutProps {
    children: React.ReactNode;
};
const Authlayout = ({children}: AuthLayoutProps) => {
    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return ( 
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="logo" width = {152} height = {56}/>
                    <div className="flex items-center gap-2">
                        <Button asChild variant = "secondary">
                            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                        {isSignIn ? "Sign Up":"Login"}
                        </Link>
                        </Button>
                    </div>
                    </div>
                </nav>
            </div>
            <Image src="/logo.svg" height={50} width = {100} alt = "Logo"/>
            {children}
        </main>
    );
}

export default Authlayout; 