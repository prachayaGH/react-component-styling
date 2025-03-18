import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary" message="Primary Button" />
        <Button type="secondary" message="Secondary Button" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="primary" text=" ⚠️ This is a warning alert box" />
        <Alert type="secondary" text=" ℹ️ This is a info alert box" />
        <Alert type="success" text=" ✅ This is a success alert box" />
        <Alert type="error" text=" ❌ This is an error alert box" />
      </div>
    </div>
  );
}

export default App;
