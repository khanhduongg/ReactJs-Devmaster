
import './App.css';
import ListUserLocal from './components/ListUserLocal';
import ListUserServer from './components/ListUserSever';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <h1>CAll API local</h1>
        <ListUserLocal/>
      </div>
      <div className='row'>
        <h1>CAll API local</h1>
        <ListUserServer/>
      </div>
    </div>
  );
}

export default App;
