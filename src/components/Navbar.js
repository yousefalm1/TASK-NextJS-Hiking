function Navbar() {
  return (
    <nav
      className="bg-secondary py-10 font-sans font-bold uppercase"
      id="mainNav"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white text-xl">
            Hike
          </a>

          <div className="hidden md:block" id="navbarResponsive">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary py-3 px-3 rounded transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary py-3 px-3 rounded transition duration-300"
                >
                  Trips
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
