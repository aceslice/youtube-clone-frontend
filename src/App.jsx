import Breadcrumbs from "./components/Breadcrumbs";
import Sidenav from "./components/Sidenav";
import Topnav from "./components/Topnav";
import Videos from "./components/Videos";
import "./css/style.css";

function App() {
  return (
    <div>
      <Topnav />
      <div className="container">
        <Sidenav />
        <div className="main">
          <Breadcrumbs />
          <Videos />
        </div>
      </div>
    </div>
  );
}
export default App;
