import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <div className="bg-purple-600/30 h-screen">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
