import { BrowserRouter } from "react-router-dom"
import {About, Contact, Hero, Experience, Projects,Navbar} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-heroBanner bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
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
