"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState, FormEvent } from "react";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please enter your name";
  if (!data.email.trim()) {
    errors.email = "Please enter your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.message.trim()) errors.message = "Please write a message";
  return errors;
}

export default function ContactForm() {
  const [state, formspreeSubmit] = useForm("mdavgqao");
  const [errors, setErrors] = useState<Errors>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
      textareaRef.current.scrollTop = 0;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    formspreeSubmit(e);
  };

  if (state.succeeded) {
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
          placeholder=" "
          onChange={() => { if (errors.name) setErrors(prev => ({ ...prev, name: undefined })); }}
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
          placeholder=" "
          onChange={() => { if (errors.email) setErrors(prev => ({ ...prev, email: undefined })); }}
        />
        <label htmlFor="email">
          Email<span className="req">*</span>
        </label>
        {errors.email && <span className="error-msg">{errors.email}</span>}
        <ValidationError prefix="Email" field="email" errors={state.errors} className="error-msg" />
      </div>

      <div className={`float-field${errors.message ? " error" : ""}`} style={{ marginBottom: "18px", paddingTop: "12px" }}>
        <textarea
          ref={textareaRef}
          id="message"
          name="message"
          rows={1}
          placeholder=" "
          onChange={() => {
            handleTextareaChange();
            if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
          }}
        />
        <label htmlFor="message">
          Message<span className="req">*</span>
        </label>
        {errors.message && <span className="error-msg">{errors.message}</span>}
        <ValidationError prefix="Message" field="message" errors={state.errors} className="error-msg" />
      </div>

      <button type="submit" className="send-btn" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}
