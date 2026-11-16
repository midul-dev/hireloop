"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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

export default function SignInPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("rememberMe") === "on";

    console.log(email, password, rememberMe);

    const { data, error } = await signIn.email(
      {
        email,
        password,
        rememberMe,
      },
      {
        onRequest: () => setIsLoading(true),
        onSuccess: (ctx) => {
          setIsLoading(false);
          toast.success(`Welcome back, ${ctx.data.user.name}!`);
          router.push("/");
        },
        onError: (ctx) => {
          setIsLoading(false);
          toast.error(ctx.error.message);
        },
      },
    );
  };

  const handleGoogleSignIn = async () => {
    setIsAuth(true);
    const { error } = await signIn.social({
      provider: "google",
      callbackURL: "/",
      newUserCallbackURL: "/onboarding",
    });
    if (error) {
      setIsAuth(false);
      toast.error(error.message || "Google sign-in failed!");
    }
  };

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/[0.08] bg-[#0c0d14]/85 backdrop-blur-xl p-6 sm:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.7)]">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          Welcome back
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400">
          Sign in to access your HireLoop profile and jobs
        </p>
      </div>

      {/* Google Sign In Button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isAuth}
        className="w-full h-11 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-white flex items-center justify-center gap-3 font-medium text-sm transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm"
      >
        {isAuth ? (
          <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <GoogleIcon />
            <span>Continue with Google</span>
          </>
        )}
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
      <form onSubmit={handleSignIn} className="space-y-4">
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
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-neutral-300">
              Password
            </label>
            <Link
              href="#forgot-password"
              className="text-xs text-[#8c82ff] hover:text-[#a59eff] transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
            <Input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="••••••••"
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

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="remember"
            name="rememberMe"
            className="size-4 rounded border-white/20 bg-white/[0.04] text-[#5c54f5] focus:ring-[#5c54f5]/40 accent-[#5c54f5] cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-xs text-neutral-400 select-none cursor-pointer"
          >
            Remember me for 30 days
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
              <span>Sign In</span>
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer Link */}
      <div className="text-center mt-6 pt-5 border-t border-white/[0.06]">
        <p className="text-xs text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-white hover:text-[#8c82ff] underline underline-offset-4 transition-colors"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
}
