import { useTranslation } from 'react-i18next';
import { useEffect, useState} from 'react';
import Cookies from 'js-cookie';

// import { motion } from "framer-motion"
// import { Link } from 'react-router-dom';




export default function PasswordPrompt () {

   const postId = 1
  const [passValue, setPassValue] = useState({
    passValue: "",
    showPassword: false,
  });

  const [validPassword, setValidPassword] = useState(null);

  console.log(Cookies.get(passValue))
// if(Cookies.get() !== 'passValue'){
//   setPassValue(Cookies.get.passValue) 
// }

  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/permisson/validate-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passValue }),
      });

      const data = await response.json();

      if (data.valid) {
        // Password is correct, redirect to the protected blog post

        Cookies.set('passValue', { passValue }, { expires: 1000 });
        setValidPassword(true);

      } else {
        // Password is incorrect, show an error alert
        alert('Invalid password. Please try again.');
      }
    } catch (error) {
      // Handle any error that occurs during the API call
      console.error('Error:', error);
    }

  };

  if (validPassword) {

        window.location.href = `/works/${postId}`;
  }

  return (
    <div>
      <main className="min-h-screen w-screen text-left"
      >

<form onSubmit={handleFormSubmit}>
      <div className='m-auto mt-20 w-72 '>
              <div className="password_2 block pt- relative">
                            <label>Password</label>
                            <div className="eye_div">
                              <input label="Username" 
                                className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                                type="password"
                                onChange={handlePasswordChange("password")}
                                value={passValue.password}
                              />
                            
                            </div>
              </div>

              <button
                className="mt-2 p-3 bg-black hover:bg-opacity-80 text-white w-72 text-sm"
              >
                Sign In
              </button>
          
      </div>
</form>



      </main>

    </div>
  )
}
