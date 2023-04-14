import Info from "./components/Info.js";
import About from "./components/About.js";
import Interest from "./components/Interest.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <section className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </section>
  );
}
