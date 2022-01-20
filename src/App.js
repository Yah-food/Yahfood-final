import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { getUser, logout } from './services/users.js';
import Home from './views/Home/Home.js';
import Auth from './views/Auth/Auth.js';
import Profile from './views/Profile/Profile.js';
import RecipeDetails from './views/RecipeDetails/RecipeDetails';
import Results from './views/Results/Results';
import AddRecipe from './views/AddRecipe/AddRecipe';
import ProtectedRoute from './utils/ProtectedRoute';
import EditRecipe from './views/EditRecipe/EditRecipe';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const [currentResults, setCurrentResults] = useState([]);
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {!currentUser && <Home setCurrentUser={setCurrentUser} />}
            {currentUser && <Profile setCurrentUser={setCurrentUser} />}
          </Route>
          <Route exact path="/login">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/profile">
            {currentUser && (
              <Profile setCurrentResults={setCurrentResults} logoutUser={logoutUser} />
            )}
          </Route>
          <Route exact path="/recipe/:title" component={RecipeDetails} />
          <Route exact path="/results">
            <Results currentResults={currentResults} />
          </Route>
          <ProtectedRoute exact path="/profile/addrecipe" currentUser={currentUser}>
            <AddRecipe currentUser={currentUser} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile/editrecipe/:title" currentUser={currentUser}>
            <EditRecipe currentUser={currentUser} />
          </ProtectedRoute>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
