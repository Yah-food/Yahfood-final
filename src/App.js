import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="bg-purple-600/30 h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
