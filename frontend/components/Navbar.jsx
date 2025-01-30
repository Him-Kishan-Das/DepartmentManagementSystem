export default function Navbar() {
    return (
      <nav className="bg-purple-700 text-white p-4 shadow-lg flex justify-between items-center">
        <ul className="flex space-x-4">
          <li className="text-3xl font-serif"><a href="/" className="hover:underline">DMS</a></li>
          {/* <li><a href="/about" className="hover:underline">About</a></li> */}
        </ul>
        <ul className="flex">
          <li className="pr-6 text-lg font-sans hover:text-blue-200"><a href="">Home</a></li>
          <li className="pr-6 text-lg font-sans hover:text-blue-200"><a href="">About</a></li>
          <li className="pr-6 text-lg font-sans hover:text-blue-200"><a href="">Faculty</a></li>
          <li className="pr-6 text-lg font-sans hover:text-blue-200"><a href="">Student</a></li>
        </ul>
      </nav>
    );
  }
  