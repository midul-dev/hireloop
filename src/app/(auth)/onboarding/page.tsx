"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUser } from "@/lib/auth-client"; // createAuthClient() theke export koro
import { toast } from "sonner";

export default function OnboardingPage() {
  const router = useRouter();
  const [role, setRole] = useState<"seeker" | "recruiter" | "admin">("seeker");
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveRole = async () => {
    setIsLoading(true);
    const { error } = await updateUser({
      role, // Better Auth additionalFields-e role thakle auto update hobe
    });
    setIsLoading(false);

    if (error) {
      toast.error(error.message || "Failed to set role");
      return;
    }

    toast.success(`Account set up as ${role}!`);
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-2xl border border-white/10 bg-[#0c0d14] text-white space-y-4">
      <h1 className="text-xl font-bold">Choose your account type</h1>
      <div className="grid grid-cols-3 gap-3">
        {(["admin", "seeker", "recruiter"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setRole(item)}
            className={`p-4 rounded-xl border text-left cursor-pointer ${
              role === item ? "border-[#5c54f5] bg-[#5c54f5]/20" : "border-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={handleSaveRole}
        disabled={isLoading}
        className="w-full h-11 rounded-xl bg-[#5c54f5] font-semibold cursor-pointer"
      >
        {isLoading ? "Saving..." : "Continue"}
      </button>
    </div>
  );
}