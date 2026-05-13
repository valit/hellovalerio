"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password") as string;
  const from = (formData.get("from") as string) || "/work/measurement-ecosystem";

  if (password === process.env.PORTFOLIO_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("portfolio-auth", password, {
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
