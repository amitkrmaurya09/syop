import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <div>
        <img src={logo} alt="logo icon" />
        <h1 className="font-bold mt-3 text-5xl">SYOP</h1>
      </div>
      <nav>
        <ul>
            <li><button href="#About" className="">About</button></li>
            <li><button href="#login">Login</button></li>
            <li><button href="#Contact">Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}
