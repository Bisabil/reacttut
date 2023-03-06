import "./App.css";
import Employee from "./component/Employee";
import { useState } from "react";

function App() {
    const [ role, setRole ] = useState("dev");
    const showEmployee = true;
    // ------------------------------//
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Bisabil" role="intern" />
          <Employee name="Nasha" role="Isteri" />
          <Employee name="Elman" role={role} />
        </>
      ) : (
        <p>This is not employee</p>
      )}
    </div>
  );
}

export default App;
