import "./App.css";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTopXs from "./assets/menu-top-xs.png";
import declarative from "./assets/icon1.png";
import components from "./assets/icon2.png";
import singleWay from "./assets/icon3.png";
import jsx from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <nav>
          <img src={ironhackLogo} alt="ironhack logo" />
          <img src={menuTopXs} alt="menu-top-xs" className="menu-top" />
        </nav>
        <div className="header-body">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="content">
        <div>
          <img src={declarative} alt="declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={components} alt="components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={singleWay} alt="singleWay" />
          <h3>SingleWay</h3>
          <p>A set of immutablr values are passed to the components.</p>
        </div>
        <div>
          <img src={jsx} alt="jsx" />
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
