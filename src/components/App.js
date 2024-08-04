import Header from "./Header";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch/:id",
        element:<WatchPage/>
      }
    ]

  } 
 ])
  return (

    <Provider store={store}>
    <div className="">
    <Header />
    <RouterProvider router ={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
