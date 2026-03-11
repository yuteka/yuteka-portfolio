import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";

function App() {
  return (
    <div className="bg-off-white font-sans text-gray-700">
      <Navbar />
      <main className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certification />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;