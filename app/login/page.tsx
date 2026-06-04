import Image from "next/image";
import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const { from, error } = await searchParams;
  const destination = from || "/work/measurement-ecosystem";

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        {/* Wordmark */}
        <a href="/" className="inline-block mb-10">
          <Image src="/hellovalerio.png" alt="hellovalerio" width={125} height={20} priority />
        </a>

        <p className="text-sm text-muted leading-relaxed mb-8">
          This work is shared selectively.
          <br />
          Enter the password to continue.
        </p>

        {error && (
          <p className="text-sm text-red-500 mb-4">
            Incorrect password, please try again.
          </p>
        )}

        <form action={login} className="flex flex-col gap-3">
          <input type="hidden" name="from" value={destination} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoFocus
            required
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm text-near-black placeholder:text-muted bg-white outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-near-black text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-[#2a2a2a] transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
