import "./App.css";
import Projects from "./components/Project";
import Home from "./components/Home";
import About from "./components/About";
import { useEffect, useState } from "react";
import Education from "./components/Education";
import { Element } from "react-scroll";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import styles from "./styles/Footer.module.css";
import { MdClose } from "react-icons/md";

const products = [
  { id: 1, image: "/product1.png", link: "https://3dtour.io.vn/3dtour" },
  { id: 2, image: "/product2.png", link: "https://nguyenngocquy-23.github.io/FE_gamePikachu/" },
  { id: 3, image: "/coming-soon.jpg", link: "" },
  { id: 4, image: "/coming-soon.jpg", link: "" },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="app-container"
      style={{ overflowY: isOpen ? "hidden" : "auto" }}
    >
      <div className="cursor-glow" id="cursor" />
      <div className="left-content">
        <Home />
      </div>
      <main
        id="right-content"
        className="right-content"
        style={{ overflowY: isOpen ? "hidden" : "auto" }}
      >
        <Element name="about">
          <About />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Footer setIsOpen={setIsOpen} />
      </main>
      <div className={`${styles.overlay} ${isOpen ? styles.show : ""}`}>
        <MdClose
          onClick={() => setIsOpen(false)}
          className={styles.closeBtn}
          title="Close"
        />
        <div className={styles.productContainer}>
          <h1>Another Site</h1>
          <ul>
            {products.map((product) => (
              <li key={product.id} data-label={`P${product.id}`}>
                <a href={product.link}>
                  <img src={product.image} alt={`Product ${product.id}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
