"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdavgqao");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
      textareaRef.current.scrollTop = 0;
    }
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
      <div className="float-field" style={{ marginBottom: "18px", paddingTop: "12px" }}>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder=" "
        />
        <label htmlFor="name">
          Name<span className="req">*</span>
        </label>
      </div>

      <div className="float-field" style={{ marginBottom: "18px", paddingTop: "12px" }}>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder=" "
        />
        <label htmlFor="email">
          Email<span className="req">*</span>
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} className="error-msg" />
      </div>

      <div className="float-field" style={{ marginBottom: "18px", paddingTop: "12px" }}>
        <textarea
          ref={textareaRef}
          id="message"
          name="message"
          rows={1}
          required
          placeholder=" "
          onChange={handleTextareaChange}
        />
        <label htmlFor="message">
          Message<span className="req">*</span>
        </label>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="error-msg" />
      </div>

      <button type="submit" className="send-btn" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}
