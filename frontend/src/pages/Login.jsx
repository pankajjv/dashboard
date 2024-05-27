import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { IoMdEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import { users } from '../data';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [visiblepassword, setVisiblePassword] = useState(false);
    const [userdata, setUserdata] = useState({});
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 
    const handleSubmit = async (e) => {
            e.preventDefault();
            setError(null)
            let { email, password } = userdata
            if (!email || !password) {
                return setError("Enter all credentials")
            }
            if (!emailRegex.test(email)) {
                return setError("Email is invalid")
            }
            if (!passwordRegex.test(password)) {
                return setError("Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase")
            }

            const validuser = users.details.find(user=> user.email == email);
            if(!validuser){
                return setError('You dont have an account');
            }
            if(validuser.password !== password){
                return setError('Wrong Credentials')
            }
            navigate('/dashboard')


    }
  return (
    <div className='w-full px-10 py-5 bg-cyan-50'>

        <div className='flex items-center gap-2'>
            <div className='w-[30px] h-[30px]'>
                <img src={logo} alt="404-logo" className='w-full '/>
            </div>
            <span>TMC</span>
        </div>

        <div className='flex mt-10'>

            <div className='flex-1 p-5 relative'>
                <div className='h-[600px] border bg-login-gradient rounded-full w-[580px]'></div>

                <div className='flex gap-2 absolute top-20 left-10 z-100'>
                    <div className='w-[126px] h-[365px]'>
                        <img src="https://s3-alpha-sig.figma.com/img/6164/8cc5/61f292d2f7d2b6aabdbd7eacbe5bf50c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8sBFAF0QvZeubn-cPjyFrMuh7MGRpzyEwGUmQryMPPsp4siklc1zmjQz2D4teLJ-ZXm340bYpzkaNC-OlQFa8Yr8okFXweuAKTFbGQBHi4a5EDwA6VLC-JNN9Dt-aiYPf5JXTR9yk5wfdQSwc~U1q0isj1-g5FSlO8lOET0otjQNUs5BBym5MeFITtA5nPKhM5q9J6ThoMWGG65ilg53H6lyhAbM-HfyjJt5stDRu5PZ7-WTB8XVnz7DoOcJb80pwamJx6kujoxhsuzYLdvmqSH6EC1eepUVBptVFtDu9hac3n-zgMDAE-Idv8ktCRf1C0HQckXIo2X0xBopO7oWg__" alt="" className='w-full object-cover rounded-lg h-full' />
                    </div>
                    <div className='w-[126px] h-[365px] relative top-24'>
                        <img src="https://s3-alpha-sig.figma.com/img/129b/3c2a/3e0e969affe3d632c353694cb8760115?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1d99lldQUVRVcz0w7W-5vUY2uP5x3LcvwXS~RphxXgJXTBqn3lXlwuVa4xfk6S~-E96MCzxWOrCnBHy7iQrVPjNOnaf0iom49P6tAU~N6NI2oESD7a0aQ048B3NRxDcMLnJjm6JDhLsPWyOxVGY0HTZNQZZINOGQKvEwuT0XBevRov4S~HVBUg9UDTNHj7knLvpaAlxDorqnauO9~cF9UANdBb0gc~nXgw~42XGNhGz0YWUMqPplfmCJu6HrCFXRS0zY~tzkdD2NpIvlj5ubCxPZk2QzNVw~o9wPBJEjTRmDqRDK0msL36jWUqqNd2-DxdD1TLQi2zdCUn5Krnipw__" alt="" className='w-full h-full object-cover rounded-lg' />
                    </div>
                    <div className='w-[126px] h-[365px]'>
                        <img src="https://s3-alpha-sig.figma.com/img/dd4a/3ec9/8cc6ecbfa8f9506c98614529a96ed482?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdC30SoxEbloQvasRVPs9i0yGaO9ojtwQpM8J9x4-3RRcj-0KOr8c4umYFn8x3Rym7opIqmOlwgQUr6hol3kkU7B4dt~QfisL9FYO8~v1ud-0hC1192UpPzPRcTtdk2Ty0kR4kcOu9uuO7UuNYmUR-EPPwZk2m8GcliOFf0syKFS81BF98v-MOEDuEyV73aV6xLvR8ZoYYMVNPuNoKDupOdbGVLGckfJrivjhGykjXjnfXnLx70TmiXrRVajvMJBpZZTbfOWaY2cgjntgzsnzXYJ7C1PxVEhVE4qJtbDaiC0JzpbXIKLBqNXG3eRphCjxcqdKHaug4szmC~q8xx5Sw__" alt="" className='w-full h-full object-cover rounded-lg' />
                    </div>
                    <div className='w-[126px] h-[365px] relative top-24'>
                        <img src="https://s3-alpha-sig.figma.com/img/6e95/820a/0cd64dd7e8fe078d521340b8d68c7806?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Chv0slRFnYp42JXZScV9iTopewfLvTX0Z5trAHJSvBCvurU4qw7bn3Wb82PZNZ2Na0ORyfX18qZF9vKl9iC55HFNh2PR5wbF6LIqW6gpYaBrEH1xPYZPbIN9xBFqEkHdWgHzgKIJDo9GrdSKvcGG7J0wPfbayZPOTZM4N7jiqiZtAOTxOzIr-Efd8FvrUTKTJjhIlhxmfqSD38A4pmu5FICxC6QI5WZocKVPoB3q7sLl6Tg3qMXEPlwJ8ZF75aZqCckfKs8JKPN9q0Cm68x2fJUURGDQkDaEAncoEGSjZkAxqiL4Jke995TtNS-WbXgIE53FcyAzXMiN3bBmSrngkA__" alt="" className='w-full h-full object-cover rounded-lg' />
                    </div>
                </div>
            </div>

            <div className='flex-1 justify-center items-center flex'>

                <div className='w-[440px] h-[415px] flex flex-col justify-center bg-white rounded-lg  p-10'>
                    <h3 className='text-stone-500'>Welcome to TMS</h3>
                    <h4>Trading & Analytics Platform</h4>
                    <form onSubmit={handleSubmit} className='mt-4'>
                    <div className='flex flex-col gap-3'>
                        <input type="text" id='email' name='email'  
                        onChange={(e) => setUserdata({
                            ...userdata,
                            [e.target.id]: e.target.value
                        })} 
                        placeholder='User ID/Email' className='border p-2 rounded-lg focus:outline-none'/>
                        <div className='border p-2 w-full rounded-lg relative'>
                            <input id='password' onChange={(e) => setUserdata({
                            ...userdata,
                            [e.target.id]: e.target.value
                        })}  
                        name='password' 
                        type={visiblepassword ? 'text': 'password'} placeholder='Password' className='focus:outline-none'/>
                            <span onClick={()=> setVisiblePassword(prev => !prev)} className='absolute right-4 top-1/2 -translate-y-1/2'>{visiblepassword ? <IoMdEye/> : <IoEyeOffSharp/> }</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                Remember me
                            </div>
                            <Link to={'/forget-password'} className='ml-auto text-blue-800 text-sm'>Forgot your password?</Link>
                        </div>
                        <button type='submit' className='bg-blue-600 p-2 rounded-lg text-white'>Login</button>

                    </div>
                    <p className='mt-2 text-center text-red-600'>{error && error}</p>
                    </form>
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default Login
