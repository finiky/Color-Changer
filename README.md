# Color-Changer

## A simple react application to show how to change CSS of a web page using React hooks and DOM manipulation techniques.

## App.js 
```javascript
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
```
## App.module.css
``` css
.header {
  text-align: center;
}
.section {
  display: grid;
  grid-template-columns: 0.15fr 1fr;
}
.aside {
  margin-top: 2rem;
  margin-left: 4rem;
  display: grid;
  grid-template-columns: max-content;
  row-gap: 2rem;
  background-color: rgba(255, 255, 255, 0.462);
  padding: 0.5rem;
}
.h3 {
  margin-bottom: 0;
}
.red,
.blue,
.pink,
.yellow,
.green {
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0.3rem hsl(0, 6%, 75%);
}
.red:active,
.blue:active,
.pink:active,
.yellow:active,
.green:active {
  box-shadow: 0 0.25rem rgb(104, 102, 102);
  transform: translateY(0.125rem);
}

.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.pink {
  background-color: pink;
}
.yellow {
  background-color: yellow;
}
```
