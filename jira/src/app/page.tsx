"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useLogout } from "@/features/auth/api/use-logout";
import { useCurrent } from "@/features/auth/api/use-current";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/user-button";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);
  //!data = data가 존재하는가
  

  return (
    <div>
      <UserButton/>
    </div>
  );
}
