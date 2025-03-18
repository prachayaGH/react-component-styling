import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import checkCircle from "./assets/check-circle.svg";
import alertTriangle from "./assets/alert-triangle.svg";
import alertCircle from "./assets/alert-circle.svg";
import frown from "./assets/frown.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button style="primary" />
        <Button style="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert style="error" icon={frown} message="This is an error alert box!" />
        <Alert style="warning" icon={alertTriangle} message="This is a warning alert box!" />
        <Alert style="info" icon={alertCircle} message="This is an info alert box!" />
        <Alert style="success" icon={checkCircle} message="This is a success alert box!" />
      </div>
    </div>
  );
}

export default App;
