import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "John";
  const lastName = "Wick";
  const age = 56;
  const Job = "actor";

  const mArr = [1, 2, 3, 4, 5,]
  
  const inputPlaceholder = "Enter your details"

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }

  const detailsInputBox = <input placeholder={inputPlaceholder} autoComplete />;

  return (
    <div className="App">
      
       <h1>First Name: {getFullName(firstName, lastName)}</h1>
      
       <p>Age: {age}</p>
       <p>Job: {Job}</p>

       {detailsInputBox}

       {mArr[0]}
      
    </div>
  );
}

export default App;
