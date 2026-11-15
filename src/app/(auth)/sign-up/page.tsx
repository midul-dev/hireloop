"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Briefcase,
  Building2,
  ShieldCheck,
  ChevronDown,
  Check,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="size-4.5" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

type Role = "Seeker" | "Recruiter" | "admin";

interface RoleOption {
  value: Role;
  label: string;
  description: string;
  icon: React.ElementType;
}

const roleOptions: RoleOption[] = [
  {
    value: "Seeker",
    label: "Seeker",
    description: "Looking for jobs & opportunities",
    icon: Briefcase,
  },
  {
    value: "Recruiter",
    label: "Recruiter",
    description: "Hiring & posting jobs",
    icon: Building2,
  },
  {
    value: "admin",
    label: "Admin",
    description: "Platform management",
    icon: ShieldCheck,
  },
];

export default function SignUpPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("Seeker");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsRoleDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedRole =
    roleOptions.find((r) => r.value === role) || roleOptions[0];
  const SelectedIcon = selectedRole.icon;

  const handleSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as Record<string, string>

    try {
      const {data, error} = await signUp.email({
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role,
        callbackURL: "/"},
        {
        onRequest: (ctx) => {
            setIsLoading(true);
        },
        onSuccess: (ctx) => {
            toast.success("Your account is create successfully!")
            setIsLoading(false)
            router.push("/")
        },
        onError: (ctx) => {
            // display the error message
            toast.error(ctx.error.message);
            setIsLoading(false);
        }
      })
    } catch (error) {
      console.log("Can't create account",error)
      setIsLoading(false)
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Signing up with Google...");
  };

  return (
    <div className="w-full max-w-[440px] rounded-2xl border border-white/[0.08] bg-[#0c0d14]/85 backdrop-blur-xl p-6 sm:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.7)]">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          Create your account
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400">
          Join thousands of professionals finding opportunities on HireLoop
        </p>
      </div>

      {/* Google Sign In Button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full h-11 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-white flex items-center justify-center gap-3 font-medium text-sm transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm"
      >
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
          or continue with
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
      </div>

      {/* Form */}
      <form onSubmit={handleSignUp} className="space-y-4">
        {/* User Role Dropdown */}
        <div className="space-y-1.5 relative" ref={dropdownRef}>
          <input type="hidden" name="role" value={role} />
          <label className="text-xs font-medium text-neutral-300">
            Account Type
          </label>
          <button
            type="button"
            onClick={() => setIsRoleDropdownOpen((prev) => !prev)}
            className="w-full h-11 px-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/30 text-white flex items-center justify-between transition-all duration-150 cursor-pointer text-left"
            aria-haspopup="listbox"
            aria-expanded={isRoleDropdownOpen}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1 rounded-md bg-[#5c54f5]/15 text-[#8c82ff]">
                <SelectedIcon className="size-4" />
              </div>
              <span className="text-sm font-semibold text-white">
                {selectedRole.label}
              </span>
              <span className="text-xs text-neutral-500 hidden sm:inline">
                • {selectedRole.description}
              </span>
            </div>
            <ChevronDown
              className={`size-4 text-neutral-400 transition-transform duration-200 ${
                isRoleDropdownOpen ? "rotate-180 text-white" : ""
              }`}
            />
          </button>

          {/* Floating Dropdown Menu */}
          {isRoleDropdownOpen && (
            <div className="absolute top-[calc(100%+6px)] left-0 w-full z-40 rounded-xl border border-white/10 bg-[#0e0f18]/95 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl space-y-1">
              {roleOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = role === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setRole(opt.value);
                      setIsRoleDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-[#5c54f5]/20 text-white border border-[#5c54f5]/40"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.05] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-1.5 rounded-md ${
                          isSelected
                            ? "bg-[#5c54f5] text-white shadow-[0_0_10px_rgba(92,84,245,0.5)]"
                            : "bg-white/[0.05] text-neutral-400"
                        }`}
                      >
                        <Icon className="size-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold leading-tight">
                          {opt.label}
                        </p>
                        <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                          {opt.description}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="size-4 text-[#8c82ff] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-300">
            Full name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
            <Input
              type="text"
              required
              name="name"
              placeholder="e.g. Alex Morgan"
              className="pl-10 h-11 bg-white/[0.03] border-white/10 focus-visible:border-indigo-500/80 focus-visible:ring-indigo-500/30 text-white placeholder:text-neutral-500"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-300">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
            <Input
              type="email"
              required
              name="email"
              placeholder="name@company.com"
              className="pl-10 h-11 bg-white/[0.03] border-white/10 focus-visible:border-indigo-500/80 focus-visible:ring-indigo-500/30 text-white placeholder:text-neutral-500"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-300">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
            <Input
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              name="password"
              placeholder="At least 8 characters"
              className="pl-10 pr-10 h-11 bg-white/[0.03] border-white/10 focus-visible:border-indigo-500/80 focus-visible:ring-indigo-500/30 text-white placeholder:text-neutral-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="terms"
            required
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="size-4 rounded border-white/20 bg-white/[0.04] text-[#5c54f5] focus:ring-[#5c54f5]/40 accent-[#5c54f5] cursor-pointer mt-0.5"
          />
          <label
            htmlFor="terms"
            className="text-xs text-neutral-400 leading-normal select-none cursor-pointer"
          >
            I agree to HireLoop&apos;s{" "}
            <Link href="#terms" className="text-white hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#privacy" className="text-white hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 rounded-xl bg-[#5c54f5] hover:bg-[#4f46e5] disabled:opacity-50 text-white font-semibold text-sm shadow-[0_0_20px_rgba(92,84,245,0.4)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          {isLoading ? (
            <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer Link */}
      <div className="text-center mt-6 pt-5 border-t border-white/[0.06]">
        <p className="text-xs text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-white hover:text-[#8c82ff] underline underline-offset-4 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
