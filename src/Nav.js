import LittleLemonLogo from "./LittleLemonLogo.png";
function Nav() {
    return (
      <>
        <img src={LittleLemonLogo} alt="logo"/>
        <ul>
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
      </>
    );
  }
  export default Nav;