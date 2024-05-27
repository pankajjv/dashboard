import React from 'react'




function InfoBlock({type, information, value, icon:Icon, tradeamount }) {
    console.log(Icon)
    return (
        <div className={'px-4 py-4 md:w-[201px]  w-full rounded-xl bg-white justify-end flex flex-col break-words ' + (type=='other' ? 'h-[224px]' : 'h-[186px]')}>
            <div className='p-3 text-blue bg-gradient-to-b from-white to-cyan-200 mb-4 w-[70px] h-[70px] rounded-full items-center flex justify-center'>
                <Icon className='text-2xl text-purple-700'/> 
            </div>
            <div className="icon">
      </div>
            <div className={(tradeamount && 'flex justify-between items-center')}>
                <p className='text-2xl'>{value}</p>
                {tradeamount && <p className='text-slate-500'>${tradeamount}</p>}
            </div>
                <span className='uppercase text-xs text-slate-500 '>{information}</span>
        </div>
    )

}

export default InfoBlock
