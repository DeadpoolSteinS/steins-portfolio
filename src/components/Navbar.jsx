const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="text-xl font-bold">SteinS</div>
      <div className="navigation-link">
        <a href="#" className="mx-2 font-semibold">
          Home
        </a>
        <a href="#" className="mx-2 font-semibold">
          About
        </a>
        <a href="#" className="mx-2 font-semibold">
          Our Capability
        </a>
        <a href="#" className="mx-2 font-semibold">
          Portfolio
        </a>
      </div>
      <button className="bg-[#032aef] text-white px-6 py-2 rounded-3xl">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
