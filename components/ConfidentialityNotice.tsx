export default function ConfidentialityNotice() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      width: "100%",
      backgroundColor: "#E4E8EA",
      border: "1px solid #5D6E77",
      borderRadius: "15px",
      padding: "10px 18px",
      marginBottom: "4px",
      boxSizing: "border-box",
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="currentColor"
        style={{ width: "16px", height: "16px", flexShrink: 0, color: "#D95C5B" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
      <span style={{
        fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif",
        fontSize: "16px",
        fontWeight: 500,
        fontStyle: "normal",
        lineHeight: "normal",
        color: "#5D6E77",
      }}>
        Some artifacts in this case study have been omitted or recreated to comply with my confidentiality obligations.
      </span>
    </div>
  );
}
