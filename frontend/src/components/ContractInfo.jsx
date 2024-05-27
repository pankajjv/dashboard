import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";


function ContractInfo() {
    const [showMenu, setShowMenu] = useState(false)
    const [showMenu1, setShowMenu1] = useState(false)
    const [showMenu2, setShowMenu2] = useState(false)

    console.log(showMenu)
    return (
        <div className='h-screen mt-4 p-2 ml-4  w-full bg-white'>
            {/* grey nav  */}
            <div className='flex px-2 py-2 justify-between bg-[#EDEDEF]'>
                <div className='flex-1'>
                    <p>trade#</p>
                </div>
                <div className='flex-1'>
                    <p >contract detais</p>
                </div>
                <div className='flex-1'>
                    <p>products</p>
                </div>
                <div className='flex-[2]'>
                    <p>shipping details</p>
                </div>
                <div className='flex-[1.7]'>
                    <p>status</p>
                </div>
            </div>

            <div className='flex p-2  border-b h-[216px]'>

                <div className='flex-1 break-words max-w-full overflow-hidden  text-sm '>
                    <div className='flex items-center'>
                        <p>TR-22-00001</p>
                        <span className='ml-[2px] text-slate-500'><IoMdInformationCircleOutline /></span>
                    </div>
                    <p className='text-slate-500 text-xs'>19/06/2022</p>
                </div>

                <div className='flex-1 break-words max-w-full overflow-hidden  text-sm '>
                    <div>
                        <p>SMJ-001</p>
                        <p className='text-slate-500 mb-2 text-xs'>SMJ Power LTD</p>
                        <p>Letter of credit</p>
                    </div>
                    <div className='mt-3'>
                        <p>JMS-001</p>
                        <p className='text-slate-500 text-xs mb-2'>JMS Power LTD</p>
                        <p>Letter of credit</p>
                    </div>
                </div>

                <div className='flex-1 text-sm break-words max-w-full  overflow-hidden'>
                    <div>
                        <p>12345 COAL</p>
                        <p className='text-slate-500 text-xs'>2000MT</p>
                    </div>
                    <div className='mt-3'>
                        <p>12345 Barite</p>
                        <p className='text-slate-500 text-xs'>2000MT</p>
                    </div>
                    <p className='mt-3 text-blue-600 underline'>+3 Products</p>
                </div>

                <div className='flex-[2] flex px-2'>
                    <div className='flex-1'><div>
                        <p>Long-term FOB</p>
                        <p className='text-slate-500 text-xs'>By Sea</p>
                    </div>
                        <div className='mt-3'>
                            <p>Laycan</p>
                            <p className='text-slate-500 text-xs'>01/09/22 - 10/09/22</p>
                        </div></div>

                    <div className='flex-1'><div>
                        <p>Load Port</p>
                        <p className='text-slate-500 text-xs'>Dubai, UAE</p>
                    </div>
                        <div className='mt-3'>
                            <p>Destination Port</p>
                            <p className='text-slate-500 text-xs'>Sharjah, UAE</p>
                        </div></div>
                </div>

                <div className='flex flex-[2]  break-words max-w-full  overflow-hidden'>

                    <div className='flex-[2]  flex flex-col gap-2'>
                        <p className='text-sm '>Contract Stage</p>
                        <span className='text-sm py-[1px] px-[10px] rounded-full bg-slate-300 border-2 border-[#A7B3C3] text-[#A7B3C3] '>Estimated Cost Sheet</span>
                        <p className=' text-sm  py-[1px] px-[10px] rounded-full bg-green-300 border-2 border-[#2FB182] text-[#2FB182] '>Customer Contract</p>
                        <p className='text-sm  py-[1px] px-[10px] rounded-full bg-yellow-300 border-2 border-[#FFAE00] text-[#FFAE00] '>Supplier Contract Draft Ver2.0</p>
                    </div>

                    <div className='p-2 relative flex-1 text-slate-500 ml-auto text-xl '>
                        <span onClick={() => setShowMenu(prev => !prev)}><BsThreeDots /></span>
                        <div className={'w-full absolute border-slate text-sm top-6 left-1 border-1 shadow-md p-2 ' + (!showMenu ? 'hidden' : "")}>
                            <p className='py-2 border-b px-3 text-xs'>edit</p>
                            <p className='py-2 border-b px-3 text-xs'>freight charges</p>
                            <p className='py-2 border-b px-3 text-xs'>customer draft</p>
                            <p className='py-2 border-b px-3 text-xs'>customer draft</p>



                        </div>

                    </div>
                </div>

            </div>
            <div className='flex p-2  border-b h-[216px]'>

                <div className='flex-1 break-words max-w-full overflow-hidden  text-sm '>
                    <div className='flex items-center'>
                        <p>TR-22-00001</p>
                        <span className='ml-[2px] text-slate-500'><IoMdInformationCircleOutline /></span>
                    </div>
                    <p className='text-slate-500 text-xs'>19/06/2022</p>
                </div>

                <div className='flex-1 break-words max-w-full overflow-hidden  text-sm '>
                    <div>
                        <p>SMJ-001</p>
                        <p className='text-slate-500 mb-2 text-xs'>SMJ Power LTD</p>
                        <p>Letter of credit</p>
                    </div>
                    <div className='mt-3'>
                        <p>JMS-001</p>
                        <p className='text-slate-500 text-xs mb-2'>JMS Power LTD</p>
                        <p>Letter of credit</p>
                    </div>
                </div>

                <div className='flex-1 text-sm break-words max-w-full  overflow-hidden'>
                    <div>
                        <p>12345 COAL</p>
                        <p className='text-slate-500 text-xs'>2000MT</p>
                    </div>
                    <div className='mt-3'>
                        <p>12345 Barite</p>
                        <p className='text-slate-500 text-xs'>2000MT</p>
                    </div>
                    <p className='mt-3 text-blue-600 underline'>+3 Products</p>
                </div>

                <div className='flex-[2] flex px-2'>
                    <div className='flex-1'><div>
                        <p>Long-term FOB</p>
                        <p className='text-slate-500 text-xs'>By Sea</p>
                    </div>
                        <div className='mt-3'>
                            <p>Laycan</p>
                            <p className='text-slate-500 text-xs'>01/09/22 - 10/09/22</p>
                        </div></div>

                    <div className='flex-1'><div>
                        <p>Load Port</p>
                        <p className='text-slate-500 text-xs'>Dubai, UAE</p>
                    </div>
                        <div className='mt-3'>
                            <p>Destination Port</p>
                            <p className='text-slate-500 text-xs'>Sharjah, UAE</p>
                        </div></div>
                </div>

                <div className='flex flex-[2]  break-words max-w-full  overflow-hidden'>

                    <div className='flex-[2]  flex flex-col gap-2'>
                        <p className='text-sm '>Contract Stage</p>
                        <span className='text-sm py-[1px] px-[10px] rounded-full bg-slate-300 border-2 border-[#A7B3C3] text-[#A7B3C3] '>Estimated Cost Sheet</span>
                        <p className=' text-sm  py-[1px] px-[10px] rounded-full bg-green-300 border-2 border-[#2FB182] text-[#2FB182] '>Customer Contract</p>
                        <p className='text-sm  py-[1px] px-[10px] rounded-full bg-yellow-300 border-2 border-[#FFAE00] text-[#FFAE00] '>Supplier Contract Draft Ver2.0</p>
                    </div>

                    <div className='p-2 relative flex-1 text-slate-500 ml-auto text-xl '>
                        <span onClick={() => setShowMenu1(prev => !prev)}><BsThreeDots /></span>
                        <div className={'w-full absolute border-slate text-sm top-6 left-1 border-1 shadow-md p-2 ' + (!showMenu1 ? 'hidden' : "")}>
                            <p className='py-2 border-b px-3 text-xs'>edit</p>
                            <p className='py-2 border-b px-3 text-xs'>freight charges</p>
                            <p className='py-2 border-b px-3 text-xs'>customer draft</p>
                            <p className='py-2 border-b px-3 text-xs'>customer draft</p>



                        </div>

                    </div>
                </div>

            </div>

            <div className='flex p-2  border-b h-[216px]'>

                <div className='flex-1 break-words max-w-full overflow-hidden  text-sm '>
                    <div className='flex items-center'>
                        <p>TR-22-00001</p>
                        <span className='ml-[2px] text-slate-500'><IoMdInformationCircleOutline /></span>
                    </div>
                    <p className='text-slate-500 text-xs'>19/06/2022</p>
                </div>

                <div className='flex-1 break-words max-w-full overflow-hidden  text-sm '>
                    <div>
                        <p>SMJ-001</p>
                        <p className='text-slate-500 mb-2 text-xs'>SMJ Power LTD</p>
                        <p>Letter of credit</p>
                    </div>
                    <div className='mt-3'>
                        <p>JMS-001</p>
                        <p className='text-slate-500 text-xs mb-2'>JMS Power LTD</p>
                        <p>Letter of credit</p>
                    </div>
                </div>

                <div className='flex-1 text-sm break-words max-w-full  overflow-hidden'>
                    <div>
                        <p>12345 COAL</p>
                        <p className='text-slate-500 text-xs'>2000MT</p>
                    </div>
                    <div className='mt-3'>
                        <p>12345 Barite</p>
                        <p className='text-slate-500 text-xs'>2000MT</p>
                    </div>
                    <p className='mt-3 text-blue-600 underline'>+3 Products</p>
                </div>

                <div className='flex-[2] flex px-2'>
                    <div className='flex-1'><div>
                        <p>Long-term FOB</p>
                        <p className='text-slate-500 text-xs'>By Sea</p>
                    </div>
                        <div className='mt-3'>
                            <p>Laycan</p>
                            <p className='text-slate-500 text-xs'>01/09/22 - 10/09/22</p>
                        </div></div>

                    <div className='flex-1'><div>
                        <p>Load Port</p>
                        <p className='text-slate-500 text-xs'>Dubai, UAE</p>
                    </div>
                        <div className='mt-3'>
                            <p>Destination Port</p>
                            <p className='text-slate-500 text-xs'>Sharjah, UAE</p>
                        </div></div>
                </div>

                <div className='flex flex-[2]  break-words max-w-full  overflow-hidden'>

                    <div className='flex-[2]  flex flex-col gap-2'>
                        <p className='text-sm '>Contract Stage</p>
                        <span className='text-sm py-[1px] px-[10px] rounded-full bg-slate-300 border-2 border-[#A7B3C3] text-[#A7B3C3] '>Estimated Cost Sheet</span>
                        <p className=' text-sm  py-[1px] px-[10px] rounded-full bg-green-300 border-2 border-[#2FB182] text-[#2FB182] '>Customer Contract</p>
                        <p className='text-sm  py-[1px] px-[10px] rounded-full bg-yellow-300 border-2 border-[#FFAE00] text-[#FFAE00] '>Supplier Contract Draft Ver2.0</p>
                    </div>

                    <div className='p-2 relative flex-1 text-slate-500 ml-auto text-xl '>
                        <span onClick={() => setShowMenu2(prev => !prev)}><BsThreeDots /></span>
                        <div className={'w-full absolute border-slate text-sm top-6 left-1 border-1 shadow-md p-2 ' + (!showMenu2 ? 'hidden' : "")}>
                            <p className='py-2 border-b px-3 text-xs'>edit</p>
                            <p className='py-2 border-b px-3 text-xs'>freight charges</p>
                            <p className='py-2 border-b px-3 text-xs'>customer draft</p>
                            <p className='py-2 border-b px-3 text-xs'>customer draft</p>



                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default ContractInfo
