import Link from "next/link";
export default function Home() {
  return (
    <body>
      <div>
        <Link href={"/"}>Home</Link>
        <br />
        <Link href={"/about"}>About</Link>
        <br />
        <Link href={"/contact"}>Contact</Link>
        
      </div>
      <div><h1>Main Page</h1></div>
      <br /><br />
      <h2>Products</h2>
      <Link href={"/products"}> Products</Link>
    </body>
  );
}
