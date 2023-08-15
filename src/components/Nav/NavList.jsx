function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/">Home</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a onClick={goTop} href="about">
            About
          </a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a onClick={goTop} href="https://gymate-io.netlify.app/gallery/page-1">
            Gallery
          </a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a onClick={goTop} href="https://gymate-io.netlify.app/schedule/monday">
            Schedule
          </a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a onClick={goTop} href="https://gymate-io.netlify.app/blog">
            Blog
          </a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a onClick={goTop} href="https://gymate-io.netlify.app/pricing">
            Pricing
          </a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a onClick={goTop} href="https://gymate-io.netlify.app/classes">
            Classes
          </a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a onClick={goTop} href="https://gymate-io.netlify.app/contact">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavList;
