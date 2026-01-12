import "./Home.css";
import heroImg from "../assests/heroimage.jpg"; // change path if needed
import logo from "../assests/logo.jpeg";

const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="IMTP Logo" />
          
        </div>

        <nav className="nav-links">
          <a className="active" href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            STUDY ABROAD <br />
            CONSULTANTS
          </h1>

          <button className="cta-btn">ADMISSION OPEN</button>

          <p className="tagline">#1 Study Abroad Consultant</p>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Study Abroad" />
        </div>
      </section>
    </>
  );
};

export default Home;
