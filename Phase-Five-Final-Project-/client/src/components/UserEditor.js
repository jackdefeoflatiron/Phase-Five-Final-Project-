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

let history = useHistory()

    function handleEditUser() {

        let id = user.id
      
        let editedUser = {
          userUsername: userUsername,
          userProfile_picture:  userProfile_picture,
          userBio: userBio,
          userEmail_address: userEmail_address,
          userPassword: userPassword,
          userPassword_conformation: userPassword_confirmation
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
<form onSubmit={handleEditUser}>
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
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={userPassword_confirmation}
            onChange={(e) => setUserPassword_conformation(e.target.value)}
          />

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
        
          <button type="submit">
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