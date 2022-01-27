  
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Send from "./pages/send";
import Recieve from './pages/recieve';
import Login from './pages/login';
import Templates from './pages/templates';
import New_request from './pages/new_request';
import Custom from './pages/custom';
import Dashboard from './pages/dashbaord';
import '@coreui/coreui/dist/css/coreui.min.css'


function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route path="/custom" component={Custom} />
      <Route path="/new_request" component={New_request} />
      <Route path="/templates" component={Templates} />
      <Route path="/login" component={Login} />
      <Route path="/send" component={Send} />
      <Route path="/recieve" component={Recieve} />
      <Route path="/" component={Dashboard} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;