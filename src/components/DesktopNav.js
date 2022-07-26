function DesktopNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 justify-center font-semibold text-white">
        <li>
          <a href="/" className="hover:underline hover:decoration-white">
            Download
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline hover:decoration-white">
            Nitro
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline hover:decoration-white">
            Safety
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline hover:decoration-white">
            Support
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline hover:decoration-white">
            Blog
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline hover:decoration-white">
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
