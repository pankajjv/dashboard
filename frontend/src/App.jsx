import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard1 from "./components/Dashboard1";
import Trading from "./components/Trading";
import Login from "./pages/Login";
import MainLayout from "./pages/MainLayout";
import ForgetPassword from "./pages/ForgetPassword";

const App = () => {
    const [activelink, setActiveLink] = useState(false);
    return (

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forget-password" element={<ForgetPassword />} />

                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard1 />} />
                    <Route path="/trading" element={<Trading />} />
                </Route>
            </Routes>

    )
}

export default App;


 // <div className="w-full h-screen relative">
        //     <nav id="navbar" className=" w-full h-[70px] bg-[#ffffff] px-3 py-2 ">


        //         <div id="test" className="gap-[60px] justify-end  flex  px-2">
        //             <div className='flex gap-3 hidden md:flex'>
        //                 <Link to={'/meetings'} className='flex items-center gap-2'>
        //                     <MdOutlineMeetingRoom className='text-xl' />
        //                     <span>Meetings</span>
        //                 </Link>
        //                 <Link to={'/tasks'} className='flex items-center gap-2'>
        //                     <MdOutlineTask className='text-xl' />
        //                     <span>Tasks</span>
        //                 </Link>
        //                 <Link to={'/approvals'} className='flex items-center gap-2'>
        //                     <MdOutlineDone className='text-xl' />
        //                     <span>Approvals</span>
        //                 </Link>
        //             </div>
        //             <div className='flex items-center gap-4'>
        //                 <Link to={'/mails'} className='text-xl relative'>
        //                     <IoMailUnreadOutline />

        //                     <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 p-1 bg-danger border border-light rounded-full text-lg">
        //                         <span className="visually-hidden">New alerts</span>
        //                     </span>

        //                 </Link>
        //                 <Link to={'/notifications'} className='text-xl relative'>
        //                     <IoMdNotificationsOutline />
        //                     <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 p-1 bg-danger border border-light rounded-full text-lg">
        //                         <span className="visually-hidden">New alerts</span>
        //                     </span>
        //                 </Link>


        //             </div>

        //             <div className='flex items-center gap-2'>
        //                 <div className='w-[30px] h-[30px]  rounded-full'>
        //                     <img src="https://s3-alpha-sig.figma.com/img/1034/a708/812d8dcc6d996db4a16bbd7e12b775b9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LV-Z1MK8McFS4Qq4um4oiGzh9LImA3p3ehXMn82y5HrkTjpSK40JVzIj9mJajPOXw3OKEzHW~1NrTqRSMZHq4KU7PGI-RK46KC-n5IkGp5TGHAse4THPQPnHk-g1B6ISbfwlwGFACmT5E1ogSp62HTfXjFIZc9DYi257UgudqvFMuy-9T2HePD~6cnHjvJ~jrmymEvpFtvd7HeefFtHOXTGfw7pXfu7RM9-CPosx7Jmt~I2LkKuRvHwwrOAeTNCvCMTb85Y1Oh2sn5kCgvM2dMQVdOu9Ry~-QyT8DbhRLNhQmwAAS8cuVS7PfBtE5rIs~Q7zE3c-0XkNB3a029VLnw__" alt="" className='w-full h-full cover rounded-full' />

        //                 </div>
        //                 <div>
        //                     <p className=''>Jane Doe</p>
        //                     <p className='text-sm text-slate-600'>Admin</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </nav>

        //     <header className={"fixed px-3 py-3 bg-slate-100 z-100  h-full  top-0 left-0 " + (activelink ? "w-[178px]" : "w-[68px]")}>
        //         <div className="w-[30px] h-[30px]">
        //             <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        //         </div>
        //         <div onClick={() => setActiveLink(prev => !prev)} className=" shadow-xl rounded-full text-blue-700 text-lg bg-white p-2 absolute top-4 -right-4">
        //             <IoIosArrowForward />
        //         </div>
        //         <div id="test" className='flex flex-col gap-4 mt-10 overflow-hidden'>
        //             <Link to={'/dashboard'}><div className='p-2 hover:bg-blue-300 rounded-md flex items-center gap-4'>
        //                 <div className='text-lg text-blue-700'><MdOutlineDashboard /></div>
        //                 <span>Dashboard</span>
        //             </div></Link>
        //             <Link to={'/trading'}><div className='p-2 hover:bg-blue-300 rounded-md flex items-center gap-4'>
        //                 <div className='text-lg text-blue-700'><TfiExchangeVertical /></div>
        //                 <span>Trading</span>
        //             </div></Link>

        //         </div>
        //     </header>

        //     <main className={"bg-purple-100  py-4 ml-[68px] " + (activelink ? "md:ml-[178px] " : "")}>
                /* <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard1 />} />
                    <Route path="/trading" element={<Trading />} />
             </Routes> */
            
        //      </main>

        // </div>
