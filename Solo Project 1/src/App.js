import Info from "./components/Info.js";
import About from "./components/About.js";
import Interest from "./components/Interest.js";
import Links from "./components/Links.js";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
      <Links />
    </div>
  );
}
