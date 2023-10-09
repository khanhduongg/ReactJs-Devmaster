
import './App.css';
import CreatUser from './components/CreatUser';
import ListCategories from './components/ListCategories';
import ListUserLocal from './components/ListUserLocal';
import ListUserLocalSever from'./components/ListUserLocalSever';
function App() {
  return (
    <div className="container border">
      <div className='row'>
      <h1>Call APi local</h1>
      <ListUserLocal/>
      </div>
      <ListUserLocalSever/>
      <CreatUser/>
      <ListCategories/>
    </div>
  );
}

export default App;
