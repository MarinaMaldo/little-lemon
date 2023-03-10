import logo2 from "./Picture2.png"
function Footer() {
    return (
      <>
        <img src={logo2} alt="logo"></img>
        <ul>
            <ul>
                Doormat Navigation
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>ABout</a>
                </li>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>Reservations</a>
                </li>
                <li>
                    <a>Order Online
                    </a>
                </li>
                <li>
                    <a>Login</a>
                </li>
            </ul>
            <ul>
                Contact Us
                <li>
                    <a>Address</a>
                </li>
                <li>
                    <a>Phone number</a>
                </li>
                <li>
                    <a>Email</a>
                </li>
            </ul>
            <ul>
                Socials
                <li>
                    <a>Instagram</a>
                </li>
                <li>
                    <a>Facebook</a>
                </li>
                <li>
                    <a>Twitter</a>
                </li>
            </ul>
        </ul>
      </>
    );
  }
  
  export default Footer;
  