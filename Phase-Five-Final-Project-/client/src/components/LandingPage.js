import { Switch, Route } from "react-router-dom";
import Header from './Header';
import Login from './Login'; 
import StoryListContainer from './StoryListContainer';
import SearchBar from './SearchBar'



function LandingPage() {



return (
    <div className="LandingPage">
    <Header/>
    <Login user={user} setUser={setUser}/>
    <StoryListContainer/>
    <SearchBar/>
    </div> 
)

}
export default LandingPage