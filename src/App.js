import Search from "./Search";
import Summary from "./Summary";
import Footer from "./Footer";


import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-container">
          <Search />
          <Summary />
        </div>
        <Footer />
      </div>
    </div>
  );
}
