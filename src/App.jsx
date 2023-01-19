import { useContext } from "react";
import { Offline, Online } from "react-detect-offline";
import { createHashRouter, RouterProvider } from "react-router-dom";
import All from "./Components/All/All";
import Categories from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import ItemDetails from "./Components/Itemdetails/ItemDetails";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Platforms from "./Components/Platforms/Platforms";
import ProtectedRoute from "./Components/ProtectRoute/ProtectRoute";
import Register from "./Components/Register/Register";
import Sortby from "./Components/Sortby/Sortby";
import { GameContext } from "./Context/GameStore";


function App() {

let {userData,setUserData,saveUserData}=useContext(GameContext)


  let routers = createHashRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        { index:true, element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: "all", element: <ProtectedRoute userData={userData}><All /></ProtectedRoute> },
        { path: "platforms/:game_type", element:<ProtectedRoute userData={userData}><Platforms /></ProtectedRoute>  },
        {path:"sort-by/:game_type",element:<ProtectedRoute userData={userData}><Sortby/></ProtectedRoute>},
        {path:"categories/:game_type",element:<ProtectedRoute userData={userData}><Categories/></ProtectedRoute>},
        { path:'itemdetails/:id', element: <ProtectedRoute userData={userData}><ItemDetails /></ProtectedRoute>  },
        {path:'login',element:<Login saveUserData={saveUserData}/>},
        {path:'register',element:<Register/>},
        

      ],
    },
  ]);
  return (
    <>
    <div> 
      <Online><RouterProvider router={routers} /></Online>
        <Offline><div className="detect-offline">You Are Offline</div></Offline>
      <Offline></Offline>
    </div>
      
    </>
  );
}

export default App;
