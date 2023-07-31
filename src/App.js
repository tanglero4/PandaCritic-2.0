import MyReviews from './components/MyReviews';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Nav from './components/Nav'
import Explore from './components/Explore';
import './App.css';


function App() {
  return (
    <div className="App">
<Nav/>
<LoginForm/>
      <MyReviews/>
<SignupForm/>
    </div>
  );
}

export default App;
