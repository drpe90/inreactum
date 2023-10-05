import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
