import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//C
import Home from "./Screens/Home";
import BottomNav from "./Components/BottomNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
