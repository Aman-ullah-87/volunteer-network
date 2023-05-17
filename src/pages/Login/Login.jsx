import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

const Login = () => {
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
  
            {/* :::Login form */}
            <form  className="flex flex-col items-center justify-center" >
              {/* Email */}
              <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
                <span className="pl-2 pr-4 border-r border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <label htmlFor="email" className="py-2">
                <input  id="email" type="email" name="email" className="form-input h-8 py-5 px-5 border-none text-black focus:ring-0 focus:outline-none" placeholder="Email" required/>
                </label>
              </div>
              {/* Password */}
              
              <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
              <span className="pl-2 pr-4 border-r border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </span>
                <label htmlFor="password" className="py-2">
                <input  id="password" type="password" name="password" className="form-input h-8 py-5 px-5 border-none text-black focus:ring-0 focus:outline-none" placeholder="password" required/>
                </label>
              </div>
         
                
             
                {/* Button Login */}
                <button type="submit" className="px-28  py-3 mb-2 rounded-lg bg-blue-500 text-white font-semibold tracking-wider uppercase transition duration-150 transform hover:scale-105 hover:bg-blue-500">Login</button>
              
            </form>
  
    
            {/* :::External Authentication */}
            <div className="flex flex-col items-center text-white">
            
       
              <button className="mb-2.5 py-3 px-7 rounded-md flex justify-between items-center bg-blue-500 font-semibold uppercase tracking-wider hover:bg-blue-600">
                <svg role="img" className="flex-shrink-0 w-5 h-5 mr-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                Login with Google
              </button>
              <p className='text-gray-500'>Don't have an account <Link to='/register' className='text-blue-500'>Create an account</Link> </p>
            </div>
            
          </div>
  
          {/* ::Illustration */}
         
  
        </div>
  
  
      </div>
    );
};

export default Login;