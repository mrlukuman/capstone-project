import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Our Capstone Project</p>
        <p>Not Completed yet</p>
        <a
          className="App-link"
          href="https://docs.google.com/document/d/1cTqE6s6ox1Em3Ujkdpvze_bv1VkwV11IOsfF8G3mQJo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check our Proposal Here
        </a>
      </header>
    </div>
  );
}

export default App;
