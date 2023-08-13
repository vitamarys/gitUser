import { useAppSelector } from "../../hooks/useRedux";
import Spinner from "../Spiner/Spiner";
import'./userCard.scss'
import defaulImg from './default.jpeg'


const UserCard = () => {

    const {userInfo, isLoading, error, userName} = useAppSelector((state)=> state.getUserReducer);
       
    return ( 
        <div className="user-wrap">
            {error ? <>Cant find user with this login {userName}</> : null }
            {isLoading &&  <Spinner/>}
            {userInfo && 
            <div className="card">
               <h3 className="name">User: {userName}</h3> 
              <div className="card__block">
              <img className="avatar" src={userInfo.avatar_url ? userInfo.avatar_url : defaulImg} alt="avatar" />   
            
               <p className="bio">Bio: {userInfo.bio ? userInfo.bio : 'empty'}</p>
            </div>  
             
            <a className="link" target="_blank" rel="noopener noreferrer" href={userInfo.html_url}>Go to profile</a>
            </div>}
        </div>
        
     );
}
 
export default UserCard;