import "./App.css";
// import Aboutus from './Components/Aboutus';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Aboutus from "./Components/Aboutus";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  //hooks for custom colors for theme like text color or element color and buttoncoor
  const [bgColor, setbgColor] = useState("white");
  const [textColor, settextColor] = useState("black");
  


  // show alert function for showing the alert message
  const showAlert = (type, message) => {
    setalert(
      // used an object inside this
      { type: type, message: message }
    );
  };

  const removeClassList = () => {
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
  };

  // toogle mode function for setting the dark mode
  const toogleMode = (cls) => {
    if (cls === "primary") {
      setbgColor("#0e6b7f5c");
      settextColor("white");
    } else if (cls === "warning") {
      setbgColor("#8e912363");
      settextColor("white");
    } else if (cls === "success") {
      setbgColor("#15c39a");
      settextColor("white");
    } else if (cls === "danger") {
      setbgColor("#9e3c4c");
      settextColor("secondary");
    } else if (cls === "secondary") {
      setbgColor("#51585f");
      settextColor("white");
    } else if (cls === "dark") {
      setbgColor("#51585f");
      settextColor("white");
    } else {
      setbgColor("white");
      settextColor("black");
    }
    console.log(bgColor);
    removeClassList();
    document.body.classList.add("bg-" + cls);
    setmode(cls);
    console.log(cls);
    showAlert("success", cls + "mode is enabled");
    // if (mode === "light") {
    //   setmode("dark");
    //   document.body.style.backgroundColor = "#112b50";

    // } else {
    //   setmode("light");
    //   document.body.style.backgroundColor = "white";

    // }
  };

  return (
    <>  
      {/* <BrowserRouter> */}
    
 

      <Navbar
        title="Text Utils"
        mode={mode}
        toogleMode={toogleMode}
        
        bgColor={bgColor}
        textColor={textColor}
      />
      <Alert alert={alert} />
      {/* <Routes>
      <Route path="/" element={ */}
      <TextForm
        showAlert={showAlert}
        mode={mode}
        heading="TextUtils"
        bgColor={bgColor}
        textColor={textColor}
      />
      {/* } /> */}
      
       
        {/* <Route path="/aboutus" element={<Aboutus/>} />
      
    </Routes>
      </BrowserRouter> */}
      
    </>
  );
}

export default App;
