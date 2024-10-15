import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
    children: React.ReactNode;
};
const Authlayout = ({children}: AuthLayoutProps) => {
    return ( 
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="logo" width = {152} height = {56}/>
                    <div className="flex items-center gap-2">
                        <Button variant = "secondary">
                            Sign Up 
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
 
export default Authlayout; //54분 메@모