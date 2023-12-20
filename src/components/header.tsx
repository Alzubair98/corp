import Link from "next/link";



export default function Header() {
    return(
    <div>
        <Link href='/'>Home</Link>
        <Link href='/performance'>Performace</Link>
        <Link href='/reliability '>Reliablility</Link>
        <Link href='/scale'>Scale</Link>
      </div>
      );
}