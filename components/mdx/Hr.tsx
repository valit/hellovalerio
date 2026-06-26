// No 'use client' needed — pure rendering, no hooks

export default function Hr() {
  return (
    <hr
      style={{
        clear: "both",
        border: "none",
        borderTop: "0.5px solid #98abb3",
        margin: 0,
        marginTop: "48px",
      }}
    />
  );
}
