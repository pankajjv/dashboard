import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
// import { dashboarddata, orders, other, shipping} from '../data/index'
import { dashboarddata,orders, other, shipping  } from '../data'
import InfoBlock from './InfoBlock'
import { Link } from 'react-router-dom'
import GraphInfo from './GraphInfo'
import { FaArrowUp } from 'react-icons/fa6'

function Dashboard1() {
    console.log('fello')
    // console.log('hii', dashboarddata)
    return (
        <div className='pl-4 pr-2'>{/* block after padding */}

            <div className='flex items-center gap-2 text-gray-600'>
                <MdOutlineDashboard className='text-xl' />
                <span>Dashboard</span>
            </div>

            <div className='mt-4 flex md:flex-row flex-col  gap-2.5 flex-wrap'>{/* outermost div */}

                <div className='md:w-[698px]   flex flex-col gap-2 max-w-full'>{/* first inner div */}
                    <div className='w-full justify-center  lg:h-[363px] p-4 rounded-xl bg-gradient-to-b from-white to-cyan-200 flex  flex-col'>
                        {/* photo and name  */}
                        <div className='flex'>
                            <img src="https://s3-alpha-sig.figma.com/img/b8ec/c6b2/53ce60eb1c4f5e810f5f131d59a78d44?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pg07fu17KedHuEXRyL3xXzxA86gcR6~K2Gxh~mVW4a6WVWhi25riF-t~wqRq53oonOvTFsfzeU36SUfNtT0zzuDqjU15FaVKwRbpnbt1H4x4kI9M2rwEp1ZeJkyuDeSC~KYwpJkzrgI9CJ7TJ9S0zcgfOc2~s6QmlpEsYX4k9KVsuJHqG9eTXT7L3KNmW0vHRTk8TyRDXDPY-3TmU5cB6jhmj8suAECejHebTa4IYOaCjiIak7OUEcC1N~MtEUTZgn~qsM458zOAzBglVtxxRm8pSvZHirZQJYcBx~mY0pSl3RCwhBDKCP1kOFM~9jhORUqh52emlSF6H7Bwa-7GRQ__" alt="" className='w-[40px] h-[40px] rounded-full object-contain' />
                            <div className='ml-3'>
                                <p className='text-sm text-slate-600'>Good Morning</p>
                                <p>Vishwanath</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-3 mt-3'>
                            {
                                orders.info.map((data) => <InfoBlock information={data.content} value={data.value} icon={data.icon} />)
                            }
                        </div>
                    </div>

                    <div className='w-full md:h-[328px] rounded-xl flex flex-col bg-white overflow-hidden'>
                        <div className='bg-[#F9F9FF] p-4 rounded-t-xl flex md:flex-row flex-col justify-between'>
                            <h2 className="text-[#69789F]">Notifications</h2>
                            <Link to={'/view-notifications'} className="underline underline-offset-1 text-[#2C67FF]">view all</Link>
                        </div>
                        {
                            dashboarddata.notification.map((data) =>
                                <div className='border-slate border-b md:w-[635px] w-full md:h-[77px]  px-3 py-2 mx-auto flex md:flex-row flex-col gap-2'>
                                    <div className='w-[35px] h-[51px] rounded-full'>
                                        <img src={data.profile}
                                            className='w-full h-full object-cover rounded-full'
                                        />
                                    </div>
                                    <div className=''>
                                        <p className='text-sm'>{data.message}</p>
                                        <span className='p-1 bg-[#E2E7FF] rounded-lg text-xs'>{data.code}</span>
                                    </div>
                                    <span className='ml-auto text-xs text-[#66687D] mt-3'>{data.time}</span>
                                </div>
                            )
                        }

                    </div>

                </div>

                {/* second inner div  */}
                <div className='md:w-[315.36px] md:h-[703px] w-full rounded-xl bg-custom-gradient px-8 py-12'>
                    <h2 className='uppercase text-white text-center'>divisions</h2>
                    <div id='graph-stats'>
                        <nav className='w-full flex justify-center mt-3'>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="focus:bg-slate-600 px-4 py-1 rounded-xl text-white opacity-80  active" id="pills-metals-tab" data-bs-toggle="pill" data-bs-target="#pills-metals" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Metals</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="focus:bg-black px-4 py-1 rounded-xl text-white opacity-60" id="pills-minerals-tab" data-bs-toggle="pill" data-bs-target="#pills-minerals" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Minerals</button>
                                </li>
                            </ul>
                        </nav>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-metals" role="tabpanel" aria-labelledby="pills-metals-tab" tabindex="0">
                                <div className='w-full p-2 flex justify-center'>
                                    <div className='sm:h-[188px] sm:w-[188px] h-[150px] w-[150px] rounded-full bg-[#2A2658] flex flex-col justify-center items-center'>
                                        <p className='text-white text-lg'>Coal</p>
                                        <p className='text-white text-white'>$2303</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-minerals" role="tabpanel" aria-labelledby="pills-minerals-tab" tabindex="0">contact</div>
                        </div>
                    </div>

                    <div id='graph-content'>
                        <nav className='w-full flex flex-start mt-3'>
                            <ul className="nav nav-underline mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link px-3 py-1 text-white active" id="pills-metals-tab" data-bs-toggle="pill" data-bs-target="#pills-amount" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Amount</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className=" nav-link underline-offset-1 px-3 py-1 text-white" id="pills-minerals-tab" data-bs-toggle="pill" data-bs-target="#pills-volume" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Volume</button>
                                </li>
                            </ul>
                        </nav>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-amount" role="tabpanel" aria-labelledby="pills-metals-tab" tabindex="0">
                                <GraphInfo />
                            </div>
                            <div className="tab-pane fade" id="pills-volume" role="tabpanel" aria-labelledby="pills-minerals-tab" tabindex="0">Volume</div>
                        </div>
                    </div>


                </div>

                <div className='flex flex-col gap-3 sm:gap-0 md:justify-between'>
                    {
                        other.info.map((data) => <InfoBlock type='other' information={data.content} value={data.value} icon={data.icon} />)
                    }
                </div>
            </div>

            <p className='mt-4 my-2'>TRADES OVERVIEW</p>

            <div className="rounded-xl h-auto py-5 sm:mr-10 px-3 sm:px-5 bg-gradient-to-b from-white to-cyan-200">
                <div className="flex justify-between flex-col md:flex-row">
                    <div>
                        <p className="text-xs text-slate-500">TOTAL TRADES</p>
                        <p className="text-2xl"><span className='text-slate-500'>$</span>3586</p>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">TOTAL REVENUE OF TRADES</p>
                        <div className="flex gap-3">
                            <p className="text-2xl">$3586.07</p>
                            <span className="badge flex items-center text-bg-success text-sm">10.2% <span><FaArrowUp /></span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 ">
                    {
                        shipping.info.map((data) => <InfoBlock information={data.content} value={data.value} icon={data.icon} tradeamount={data.amount} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default Dashboard1
