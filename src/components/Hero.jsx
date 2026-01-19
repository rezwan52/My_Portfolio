import profileImg from "../assets/mainfile.jpg";
import BdFlag from "../assets/bd-flag.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi .... <span>!</span>
        </h1>
        <h2>I'm Rezwan Ahmed</h2>
        <p>
          <div className="hi-text">
            I am a Frontend Developer who builds modern, responsive
          websites using React.
          </div>
          
        </p>
        <div className="location">
  <img src={BdFlag} alt="Bangladesh Flag" className="flag-icon" />
  <span>Dhaka, Bangladesh</span>
</div>

        <button>Know About Me</button>

        <button class="download-btn">
          Download CV
 
  
</button>


      
      </div>

      

       <div className="hero-right">
      <div className="profile-container">
        {/* Background glow */}
        <div className="profile-bg"></div>
        {/* Image */}
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
    </div>
    <div class="scroll-down">
      <span class="arrow">↓</span>
  <span class="text">Scroll Down</span>
  
</div>



    </section>
  );
}

export default Hero;
