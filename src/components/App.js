import Header from "./Header";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
function App() {
  return (

    <Provider store={store}>
    <div className="">
    <Header />
    <Body />
    </div>
    </Provider>
  );
}

export default App;
