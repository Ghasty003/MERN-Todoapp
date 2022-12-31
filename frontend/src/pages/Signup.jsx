import { useState } from "react"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>

      <h3>Sign Up</h3>
      
      <div>
        <label>Email address</label>

        <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
        />
      </div>

      <div>
        <label>Username</label>

        <input 
            type="text" 
            onChange={(e) => setUserName(e.target.value)} 
            value={userName} 
        />
      </div>
      
      <div>
        <label>Password</label>
        
        <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
        />
      </div>

      <button>Sign up</button>
    </form>
  )
}

export default Signup