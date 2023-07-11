import Router from "./components/atoms/Router";
import Routes from "./components/atoms/Routes";
import Route from "./components/atoms/Route";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
