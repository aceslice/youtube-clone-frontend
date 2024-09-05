import home from "../assets/home.svg";
import short from "../assets/music_video.svg";
import playlist from "../assets/video_playlist.svg";
import start from "../assets/start.svg";
import downloads from "../assets/downloads_folder.svg";

const Sidenav = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <img src={home} alt="" className="ico" />
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src={short} alt="" className="ico" />
            </span>
            <span className="title">Shorts</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src={playlist} alt="" className="ico" />
            </span>
            <span className="title">Subscriptions</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src={start} alt="" className="ico" />
            </span>
            <span className="title">You</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src={downloads} alt="" className="ico" />
            </span>
            <span className="title">Downloads</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
