import './App.scss';
import Search from './components/Search/Search';
import UserCard from './components/UserCard/UserCard';

function App() {
  return (
    <div className="container">
      <Search/>
      <UserCard/>
    </div>
  );
}

export default App;
