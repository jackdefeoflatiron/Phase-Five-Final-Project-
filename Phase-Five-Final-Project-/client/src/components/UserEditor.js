import react, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'




function UserEditor({handleEditUser, user, login, }) {
    // const history = useHistory()
    const [userUsername, setUserUsername] = useState(user.username)
    const [userEmail_address, setUserEmail_address] = useState(user.email_address)
    const [userPassword, setUserPassword] =useState(user.password)
    // const [userPassword_confirmation, setUserPassword_conformation] =useState(user.password_confirmation)
    const [userBio, setUserBio] =useState(user.bio)
    const [userProfile_picture, setUserProfile_picture] =useState(user.profile_picture)
console.log(user)
console.log(login.user)

let history = useHistory()
let id = user.id
    function handleEditUser() {

        
      
        let editedUser = {
          username: userUsername,
          profile_picture:  userProfile_picture,
          bio: userBio,
          email_address: userEmail_address,
          password: userPassword,
        }
        fetch(`users/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(editedUser)
        })
        .then(history.push("/home"))
        console.log(editedUser)
      }

return (
    <div>
        <h1>Edit Profile</h1>        
<form className='usereditor'>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={userUsername}
            onChange={(e) => setUserUsername(e.target.value)}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={userEmail_address}
            onChange={(e) => setUserEmail_address(e.target.value)}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />          
          {/* <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={userPassword_confirmation}
            onChange={(e) => setUserPassword_conformation(e.target.value)}
          /> */}

          <input
            placeholder="Bio"
            type="Bio"
            name="Bio"
            value={userBio}
            onChange={(e) => setUserBio(e.target.value)}
          />

          <input
            placeholder="ProfilePicture"
            type="ProfilePicture"
            name="ProfilePicture"
            value={userProfile_picture}
            onChange={(e) => setUserProfile_picture(e.target.value)}
          />
        
          <button onClick={(e)=>handleEditUser(e)} type="button">
            Save Edits 
          </button>
          </form>
          <button>
          <Link to='/home'>Cancel</Link>
          </button>
    </div>
)
}
 export default UserEditor