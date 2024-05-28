import NavigationBar from "./components/navigation-bar/NavigationBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import EducationSkills from "./components/education/EducationSkills";
import ExperienceProjects from "./components/projects/ExperienceProjects";
import ExtracurricularsInterests from "./components/interests/ExtracurricularsInterests";
import Footer from "./components/footer/Footer";


function App() {
  return (
      <div id={'home'}>
          <NavigationBar />
          <Hero />
          <About />
          <EducationSkills />
          <ExperienceProjects />
          <ExtracurricularsInterests />
          <Footer />
      </div>
  )
}
export default App;
