import "./App.css";
import Home from "./pages/Home";

function scrollToAnchor(anchorId) {
  const element = document.getElementById(anchorId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
