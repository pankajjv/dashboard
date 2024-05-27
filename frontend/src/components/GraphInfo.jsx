import React from 'react'
import { dashboarddata } from '../data';
import {FaArrowUp, IoMdArrowDown} from '../icons/index'
function GraphInfo() {
  return (
    <div className='gap-4 flex flex-col'>
        {
            dashboarddata.metalamount.map(data => 
                <div className='flex gap-3'>
                <div className='w-[14px] mt-2 h-[14px] bg-green-600 rounded-full'></div>
                <div className='text-white'>
                  <p>{data.name}</p>
                  <div className='flex'>
                  <p>${data.value}</p>
                  <span className={'badge text-bg' + (data.status == 'up'? '-success ' : '-danger ') + ' flex gap-1'}>{data.change}% {data.status=='up' ? <FaArrowUp/>: <IoMdArrowDown/>}</span>
                  </div>
                </div>
              </div>
            )
        }
    
    </div>
  )
}

export default GraphInfo
