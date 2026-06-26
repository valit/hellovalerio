"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = (formData.get("password") as string).trim();
  const from = (formData.get("from") as string) || "/work/measurement-ecosystem";

  const pw0 = process.env.PORTFOLIO_PASSWORD?.trim();
  const pw1 = process.env.PORTFOLIO_PASSWORD_1?.trim();

  console.log("[auth debug] PORTFOLIO_PASSWORD:", pw0 ? `exists (length ${pw0.length})` : "missing");
  console.log("[auth debug] PORTFOLIO_PASSWORD_1:", pw1 ? `exists (length ${pw1.length})` : "missing");

  let profile: string | null = null;
  if (pw0 && password === pw0) profile = "0";
  else if (pw1 && password === pw1) profile = "1";

  if (profile !== null) {
    const cookieStore = await cookies();
    cookieStore.set("portfolio-auth", profile, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    redirect(from);
  }

  const params = new URLSearchParams({ error: "1", from });
  redirect(`/login?${params.toString()}`);
}
