import Reach, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'



function UserEditor({handleEditUser, user, login}) {
    // const history = useHistory()
    const [userUsername, setUserUsername] = useState("")
    const [userEmail_address, setUserEmail_address] = useState("")
    const [userPassword, setUserPassword] =useState("")
    const [userPassword_confirmation, setUserPassword_conformation] =useState("")
    const [userBio, setUserBio] =useState("")
    const [userProfile_picture, setUserProfile_picture] =useState("")
console.log(user)
console.log(login.user)

    function handleEditUser() {

        let id = user.id
      
        let editedUser = {
          userUsername: user.username,
          userProfile_picture:  user.profile_picture,
          userBio: user.bio,
          userEmail_address: user.email_address,
          userPassword: user.password,
          userPassword_conformation: user.password_conformation
        }
        fetch(`users/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(editedUser)
        })
      }

return (
    <div>
        <h1>Edit Profile</h1>        
<form onSubmit={handleEditUser}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={user.userUsername}
            onChange={(e) => setUserUsername(e.target.value)}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={user.userEmail_address}
            onChange={(e) => setUserEmail_address(e.target.value)}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={user.userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />          
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={user.userPassword_confirmation}
            onChange={(e) => setUserPassword_conformation(e.target.value)}
          />

          <input
            placeholder="Bio"
            type="Bio"
            name="Bio"
            value={user.userBio}
            onChange={(e) => setUserBio(e.target.value)}
          />

          <input
            placeholder="ProfilePicture"
            type="ProfilePicture"
            name="ProfilePicture"
            value={user.userProfile_picture}
            onChange={(e) => setUserProfile_picture(e.target.value)}
          />
        
          <button placeholder="submit" type="submit">
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