import logo from "../../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white p-10">
      <aside>
        <img className="h-16" src={logo} alt="logo" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
