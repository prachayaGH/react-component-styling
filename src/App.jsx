import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" text="button"/>
        <Button type="secondary" text="button"/>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error" text="This is error alert box"/>
        <Alert type="warning" text="This is warning alert box"/>
        <Alert type="info" text="This is info alert box"/>
        <Alert type="success" text="This is success alert box"/>
      </div>
    </div>
  );
}

export default App;
