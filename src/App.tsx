
import { useState } from "react";
import { Header } from "./components/Header";
import Message from "./components/Message";


function App() {
 const [alertVisible,setAlertVisible]  = useState(false)

 
  
  return (
    <div>
      <Header />
      <Message />
     </div>
  );
}

export default App;
