
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'
const Register = () => {
    return (
        <div className="w-full py-10 px-1 sm:px-5 flex flex-col items-center bg-white font-body"> {/* Container */}

        {/* :TITLE */}
        <div className="mb-16 text-center">
          <Link to='/'><img src={logo} className='w-[203px] h-[60px]' alt="" /></Link>
        </div>
  
        {/* :LOGIN CONTAINER */}
        <div className="w-full md:w-3/4 max-w-3xl grid  border border-gray-500 rounded-2xl bg-white text-gray-500 shadow-lg overflow-hidden">
  
          {/* ::Login Side */}
          <div className="col-span-2 lg:col-span-1 py-10 px-10">
            <h1 className='text-center text-black text-5xl my-4'>Register As a Volunteer </h1>
  
            {/* :::Login form */}
            <form  className="flex flex-col items-center justify-center" >
              {/* Email */}
              <div className="my-2 px-6 flex items-center border border-gray-300 rounded">
            
            <label htmlFor="name" className="py-1">
            <input  id="name" type="text" name="name" className="form-input h-8 py-5 px-5 border-none text-black focus:ring-0 focus:outline-none" placeholder="Full Name" required/>
            </label>
          </div>
          
              
              <div className="my-2 px-6 flex items-center border border-gray-300 rounded">
            
                <label htmlFor="email/user" className="py-1">
                <input  id="email" type="text" name="password" className="form-input h-8 py-5 px-5 border-none text-black focus:ring-0 focus:outline-none" placeholder="Email/Username" required/>
                </label>
              </div>
         
              <div className="my-2 px-6 flex items-center border border-gray-300 rounded">
            
                <label htmlFor="date" className="py-1">
                <input  id="date" type="date" name="date" className="form-input h-8 py-5 px-10 border-none text-black focus:ring-0 focus:outline-none" placeholder="Date" required/>
                </label>
              </div>
              <div className="my-2 px-6 flex items-center border border-gray-300 rounded">
            
                <label htmlFor="des" className="py-1">
                <input  id="des" type="text" name="des" className="form-input h-8 py-5 px-5 border-none text-black focus:ring-0 focus:outline-none" placeholder="Description" required/>
                </label>
              </div>
         
                
             
                {/* Button Login */}
                <button type="submit" className="px-20  py-3 mb-2 rounded-lg bg-blue-500 text-white font-semibold tracking-wider uppercase transition duration-150 transform hover:scale-105 hover:bg-blue-500">Registration</button>
              
            </form>
  
    
            {/* :::External Autentification */}
            <div className="flex flex-col items-center text-white">
           
         
          
              
            </div>
            
          </div>
  
          {/* ::Illustration */}
         
  
        </div>
  
  
      </div>
    );
};

export default Register;