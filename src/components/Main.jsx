import React from 'react'

export default function Main() {
  return (
    <div className="flex justify-between pt-36 px-32" >
        <h1 className="font-thin text-white" style={{ fontSize: '40px', lineHeight: '48px' }}>Today's leaderboard</h1>
        <div className="flex px-6 gap-5 items-center" style={{ background: "#1D1D1D", borderRadius: '16px' }}>
          <p className="font-thin text-base text-white" style={{ lineHeight: '20px' }}>30 May 2022</p>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#696969" />
          </svg>
          <div className="px-2 py-1" style={{ background: '#9BFF00', borderRadius: '8px' }}>
            <h1 className="text-sm font-thin text-black">SUBMISSIONS OPEN</h1>
          </div>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#696969" />
          </svg>
          <p className="text-sm font-thin text-white">11:34</p>
        </div>
      </div>
  )
}
