// app/components/Header.tsx
import Link from "next/link";

const Header = () => (
  <header style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #eee",
  }}>
    <h1>Szabadvok</h1>
    <div>
      <Link href="/auth/login">
        <button style={{
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          background: "#3b82f6",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          marginRight: "0.5rem",
        }}>
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button style={{
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          background: "#10b981",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}>
          Register
        </button>
      </Link>
    </div>
  </header>
);

export default Header;
