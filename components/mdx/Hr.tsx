// No 'use client' needed — pure rendering, no hooks

export default function Hr() {
  return (
    <hr
      style={{
        clear: "both",
        border: "none",
        borderTop: "1px solid #8a97a0",
        margin: 0,
        marginTop: "48px",
      }}
    />
  );
}
