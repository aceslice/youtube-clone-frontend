import menu from "../assets/menu_vertical.svg";
const Videos = () => {
  const vids = [
    {
      title: "React Tutorials",
      channel: "The Net ninja",
      time: "Two Weeks",
      vidLenght: "2:20",
      views: "94k views",
      avatar: `https://avatar.vercel.sh/${"netninja"}`,
    },
    {
      title: "Python Tutorials",
      channel: "Mosh Hamedani",
      time: "Two Weeks",
      vidLenght: "2:20",
      views: "94k views",
      avatar: `https://avatar.vercel.sh/${"mosh"}`,
    },
    {
      title: "React Tutorials",
      channel: "Brad Traversy",
      time: "Two Weeks",
      vidLenght: "2:20",
      views: "94k views",
      avatar: `https://avatar.vercel.sh/${"brad"}`,
    },
    {
      title: "Database Administration",
      channel: "David Larry Walker Amoah",
      time: "Two Weeks",
      vidLenght: "2:20",
      views: "94k views",
      avatar: `https://avatar.vercel.sh/${"davidamoah"}`,
    },
    {
      title: "React native for beginners",
      channel: "Ace Coder",
      time: "1 day ago",
      vidLenght: "1:02:20",
      views: "94k views",
      avatar: `https://avatar.vercel.sh/${"gideon"}`,
    },
    {
      title: "HTML & CSS",
      channel: "The Net Ninja",
      time: "Two Weeks",
      vidLenght: "42:20",
      views: "94k views",
      avatar: `https://avatar.vercel.sh/${"netninja"}`,
    },
  ];
  return (
    <div className="videos">
      {vids.map((vid) => (
        <div className="video-card" key={vid.vidLenght}>
          <div
            className="thumbnail"
            style={{ backgroundImage: `url(${vid.avatar})` }}
          >
            <p>{vid.vidLenght}</p>
          </div>
          <div className="info">
            <img src={vid.avatar} alt="" className="avatar" />
            <div className="texts">
              <h1>{vid.title}</h1>
              <p>{vid.channel}</p>
              <p className="footer">
                {vid.views} .. {vid.time}
              </p>
            </div>
            <img src={menu} alt="" className="ico" style={{ height: "30px" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
