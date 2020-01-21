import React, {useState} from "react";
import "./App.css";
import PostPage from './components/PostsContainer/PostsPage'
import Search from './components/SearchBar/SearchBarContainer'
import dummydata from './dummy-data'

const App = () => {
  const [data, setData] = useState(dummydata)
  return (
    <div className="App">
      <Search data={data} setData={setData}/>
      <PostPage data={data}/>
    </div>
  );
};

export default App;
