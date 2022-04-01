
import './App.css';
import Friends from './componets/Friends/Friends';
import About from './componets/About/About';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home/Home';
import NOF from './componets/NOF/NOF';
import Header from './componets/Header/Header';
import FriendDetail from './componets/FriendDetail/FriendDetail';
import Posts from './componets/CustomLink/Posts/Posts';
import PostDetail from './componets/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NOF></NOF>}></Route>
      </Routes>
    </div>
  );
}

export default App;
