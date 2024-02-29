import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 font-semibold
        hover:text-transparent
        hover:bg-clip-text
        hover:bg-gradient-to-r from-purple-500 via-pink-600 to-red-600"
      >
        {title}
      </Link>
    );
}

export default NavLink;
