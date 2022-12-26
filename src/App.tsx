import { Web3Button } from "@web3modal/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Web3Modal React Connection</h2>
      <div className="wallet-container">
        <Web3Button balance="show" icon="hide" label="Connect Wallet" />
      </div>
    </div>
  );
}

export default App;
