
import Header from "./Header";
import "./Header.css"
import Home from "./Home";
import "./Home"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

  auth.onAuthStateChanged( authUser => {

    console.log('The user is >>> ,',authUser)

    if(authUser){

      dispatch({
        type:'SET_USER',
        user : authUser
    })  
    }
    else{

      dispatch({
        type:'SET_USER',
        user : ''
      })
    }
  })
    

  },[])

  return (
    <BrowserRouter>
    <div className="App">
    
    <Routes>
    <Route  path="/login" element={[<Login/>]}/>
    <Route  path="/checkout" element={[<Header/>,<Checkout/>] }/>
    <Route  path="/" element={[<Header/>,<Home/>]}/>
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
