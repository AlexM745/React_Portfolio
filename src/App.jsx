import { BrowserRouter } from "react-router-dom"
import {About, Contact, Hero, Experience, Projects,Navbar} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Projects />

        <div>
          <Contact />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App
