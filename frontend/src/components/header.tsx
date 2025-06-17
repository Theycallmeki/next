import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <nav>
        <Link href="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link href="/about">din tai fung</Link>
      </nav>
    </header>
  );
}
