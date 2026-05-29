"use client";

import { useState, useRef, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
      if (field === "message" && textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        textareaRef.current.scrollTop = 0;
      }
    };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (!form.message.trim()) e.message = "Please write a message";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    // TODO: wire up backend here
    console.log("Contact form submission:", form);
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "24px",
            color: "#2f3a44",
            lineHeight: 1.4,
            margin: "0 0 12px",
          }}
        >
          Thank you — I&apos;ll be in touch shortly.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            color: "#5d6e77",
            margin: 0,
          }}
        >
          Replies usually go out within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form">
      <div className={`float-field${errors.name ? " error" : ""}`} style={{ marginBottom: "18px", paddingTop: "12px" }}>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder=" "
          value={form.name}
          onChange={handleChange("name")}
        />
        <label htmlFor="name">
          Name<span className="req">*</span>
        </label>
        {errors.name && <span className="error-msg">{errors.name}</span>}
      </div>

      <div className={`float-field${errors.email ? " error" : ""}`} style={{ marginBottom: "18px", paddingTop: "12px" }}>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder=" "
          value={form.email}
          onChange={handleChange("email")}
        />
        <label htmlFor="email">
          Email<span className="req">*</span>
        </label>
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      <div className={`float-field${errors.message ? " error" : ""}`} style={{ marginBottom: "18px", paddingTop: "12px" }}>
        <textarea
          ref={textareaRef}
          id="message"
          name="message"
          rows={1}
          required
          placeholder=" "
          value={form.message}
          onChange={handleChange("message")}
        />
        <label htmlFor="message">
          Message<span className="req">*</span>
        </label>
        {errors.message && <span className="error-msg">{errors.message}</span>}
      </div>

      <button type="submit" className="send-btn" disabled={status === "submitting"}>
        Send
      </button>
    </form>
  );
}
