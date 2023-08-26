import styles from "./App.module.css";
import { useEffect, useState } from "react";
const App = () => {
  const [color, setColor] = useState("white");
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
  }, [color]);
  return (
    <div id="main" className={styles.main}>
      <header className={styles.header}>
        <h1>Color Changer</h1>
        <h2>Change background color of the page with a click!</h2>
      </header>
      <div id="div1" className={styles.section}>
        <aside className={styles.aside}>
          <h3 className={styles.h3}>Click on a color</h3>
          <button
            onClick={() => setColor("red")}
            id="red"
            className={styles.red}
          ></button>
          <button
            onClick={() => setColor("blue")}
            id="blue"
            className={styles.blue}
          ></button>
          <button
            onClick={() => setColor("green")}
            id="green"
            className={styles.green}
          ></button>
          <button
            onClick={() => setColor("pink")}
            id="pink"
            className={styles.pink}
          ></button>
          <button
            onClick={() => setColor("yellow")}
            id="yellow"
            className={styles.yellow}
          ></button>
        </aside>
        <div></div>
      </div>
    </div>
  );
};

export default App;
