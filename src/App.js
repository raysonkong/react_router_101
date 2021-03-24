import './App.css';
import { Route, Link } from 'react-router-dom';

const HomePage = (props) => {
  console.log(props.location.pathname)
  return(
    <div>
      <h1>HomePage</h1>
      <Link to='/topics'>Topics List</Link>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
    </div>
  );
}

const TopicsList = (props) => {
  console.log(props)
  const {range} = props;
  return(
    <div>
      <h1>Topic List Page</h1>
      <Link to={`${props.match.url}/13`}>To Topic 13</Link>
      <Link to={`${props.match.url}/17`}>To Topic 17</Link>
      <Link to={`${props.match.url}/21`}>To Topic 21</Link>
    </div>
  );
}

const TopicDetail = (props) => { 
  console.log(props)
  return(
    <div>
      <h1>Topic Detail: {props.match.params.topicId}</h1>


    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/abc/topics' component={TopicsList}/>
      <Route exact path='/def/topics' component={TopicsList}/>
      <Route path='/topics/:topicId' component={TopicDetail}/>
    </div>
  );
}

export default App;
