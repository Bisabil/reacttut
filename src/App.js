import "./index.css";
import Employee from "./component/Employee";
import { useState } from "react";

function App() {
    const [ role, setRole ] = useState("dev");
    const [ employees, setEmployee] = useState(
        [{
            id: 1,
            name: 'Caleb',
            role: 'Developer',
            img: 'https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg'
        },
        {
            id: 2,
            name: 'Abil',
            role: 'Engineer',
            img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: 'Nasha',
            role: 'Culinary',
            img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 4,
            name: 'Elman',
            role: 'Doctor',
            img: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 5,
            name: 'Sarah',
            role: 'Nurse',
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 6,
            name: 'Stacey',
            role: 'Lab',
            img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }]
    )
    const showEmployee = true;

    // ------------------------------//
  return (
    <div>
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
            }} 
            />
            <div className="flex flex-wrap justify-center">
                {employees.map((employee) => {
                    console.log(employee);
                     return (<Employee key={employee.id} name={employee.name} role={employee.role} img={employee.img} />)
                })}
            </div>
        </>
      ) : (
        <p>This is not employee</p>
      )}
    </div>
  );
}

export default App;
