import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './container/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Register } from './container/form/Register';
import { Login } from './container/form/Login';
import { CntMaps }  from './container/cntMaps/CntMaps';
import { NewToilet } from './container/form/NewToilet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/newtoilet">
              <Header></Header>
              <NewToilet></NewToilet>
          </Route>
          <Route path="/map">
            <Header></Header>
            <CntMaps></CntMaps>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
