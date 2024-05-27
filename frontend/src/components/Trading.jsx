import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import ContractInfo from './ContractInfo'
function Trading() {
  return (
    <div className='w-full px-2'>

      {/* <div className='p-0 bg-white w-full'> */}
      <div className='pl-4 pt-4'>
      <div className='flex items-center gap-2 text-gray-600 mb-3'>
        <MdOutlineDashboard className='text-xl' />
        <h2 className='uppercase'>Trades transactions</h2>
      </div>
        <nav className='w-full  bg-white  px-2 pt-[10px]'>
          <ul className="nav  nav-underline" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link  active" id="pills-process-tab" data-bs-toggle="pill" data-bs-target="#pills-in-process" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Contract In Process</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link " id="pills-execution-tab" data-bs-toggle="pill" data-bs-target="#pills-in-execution" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Contracts Finalized(In-Excecution)</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-closure-tab" data-bs-toggle="pill" data-bs-target="#pills-pre-closure" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Shipment Completed(Pre-Cosure)</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className=" nav-link" id="pills-closed-tab" data-bs-toggle="pill" data-bs-target="#pills-closed-trades" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Closed Trades</button>
            </li>
          </ul>
        </nav>
      </div>

        <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-in-process" role="tabpanel" aria-labelledby="pills-process-tab" tabindex="0"> 

                  <ContractInfo/>
                </div>
                <div className="tab-pane fade" id="pills-in-execution" role="tabpanel" aria-labelledby="pills-execution-tab" tabindex="0"><p className='pl-4'>Contracts Finalized(In-Excecution)</p></div>
                <div className="tab-pane fade" id="pills-pre-closure" role="tabpanel" aria-labelledby="pills-closure-tab" tabindex="0"><p className='pl-4'>Shipment Completed(Pre-Cosure)</p></div>
                <div className="tab-pane fade" id="pills-closed-trades" role="tabpanel" aria-labelledby="pills-closed-tab" tabindex="0"><p className='pl-4'>Closed Trades</p></div>
        </div>
    </div>

  )
}

export default Trading
