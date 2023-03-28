import useLocalStorage from "use-local-storage";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Navigation from "./Router";

function App() {
  const Dark = window.matchMedia('(prefers-color-scheme: halloween)').matches
  const [ Theme, setTheme ] = useLocalStorage('theme', Dark ? 'halloween' : 'autumn');

  const switchTheme = () => {
    const newThemes = Theme === 'autumn' ? 'halloween' : 'autumn'
    setTheme(newThemes)
  }
  return (
   <div data-theme={Theme}>
    <Navbar switchTheme={switchTheme} Theme={Theme} />
    <Alert />
    <Navigation />
    <Footer />
   </div>
  );
}

export default App;
