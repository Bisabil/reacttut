
import "./App.css";
import Employee from "./component/Employee";

function App() {
    const showEmployee = false
    return (
        <div className="App">
            {showEmployee ?  (
                <>
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                </>
            ) : (
                <p>This is not employee</p>
            )}
        </div>
)
     
}

export default App;
