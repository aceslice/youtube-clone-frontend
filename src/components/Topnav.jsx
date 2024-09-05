import youtubeLogo from "../assets/youtube_play_button.svg";
import hamburgerMenu from "../assets/menu_squared.svg";
import recordBtn from "../assets/microphone.svg";
import searchBtn from "../assets/search.svg";
import videoBtn from "../assets/documentary.svg";
import accountBtn from "../assets/male_user.svg";
import notification from "../assets/notification.svg";
import upBtn from "../assets/up.svg";
const Topnav = () => {
  function toggleMenu() {
    console.log("clicked");
    let navigation = document.querySelector(".sidenav");
    navigation.classList.toggle("active");
  }
  return (
    <nav className="topnav">
      <div className="logo-container">
        <img
          src={hamburgerMenu}
          alt={hamburgerMenu}
          className="ico"
          onClick={toggleMenu}
        />
        <a href="#">
          <div className="logo">
            <img src={youtubeLogo} alt={youtubeLogo} className="ico" />
            <span className="logo-text">
              YouTube <sup>GH</sup>
            </span>
          </div>
        </a>
      </div>

      {/* Search input */}
      <div className="search">
        <div className="search-input">
          <input type="search" placeholder="Search" />
          <img
            src={searchBtn}
            alt={searchBtn}
            className="ico"
            style={{
              background: "#282828",
              padding: "8px 24px",
              border: "1px solid hsl(0, 0%, 18.82%)",
              height: "100%",
            }}
          />
        </div>
        <div
          className="ico"
          id="mic"
          style={{
            padding: "8px",
            borderRadius: "50%",
            backgroundColor: "#282828",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={recordBtn}
            alt={recordBtn}
            className="ico"
            style={{ height: "28px" }}
          />
        </div>
      </div>
      {/* Action buttons */}
      <div className="actions">
        <img src={videoBtn} alt="" className="ico" />
        <img src={notification} alt="" className="ico" />
        <img src={upBtn} alt="" className="ico" />
        <img src={accountBtn} alt="" className="ico" />
      </div>
    </nav>
  );
};

export default Topnav;
