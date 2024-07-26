import React from 'react'

const ebook = () => {
  return (
<div>
    <div className="w-96 h-14 justify-start items-center gap-4 inline-flex">
  <div className="w-32 text-white text-2xl font-bold font-['Space Grotesk'] leading-loose">Download the E Book</div>
  <div className="w-48 pl-4 py-4 bg-white/5 rounded-full shadow-inner border border-white/5 backdrop-blur-sm justify-end items-center flex">
    <div className="w-52 self-stretch pr-20 justify-start items-center inline-flex">
      <div className="w-32 text-[#999999] text-sm font-normal font-['Inter']">Name</div>
    </div>
  </div>
  <div className="w-48 h-12 px-4 py-4 bg-white/5 rounded-full shadow-inner border border-white/5 backdrop-blur-sm justify-center items-center flex">
    <div className="grow shrink basis-0 self-stretch pr-7 justify-start items-center inline-flex">
      <div className="w-32 text-[#999999] text-sm font-normal font-['Inter']">Phone Number</div>
    </div>
  </div>
  <div className="w-48 h-12 px-4 py-4 bg-white/5 rounded-full shadow-inner border border-white/5 backdrop-blur-sm justify-center items-center flex">
    <div className="grow shrink basis-0 self-stretch pr-7 justify-start items-center inline-flex">
      <div className="w-32 text-[#999999] text-sm font-normal font-['Inter']">Email</div>
    </div>
  </div>
  <div className="px-8 py-3 bg-gradient-to-l from-[#f2846a] to-[#e4401c] rounded-3xl justify-center items-center flex">
    <div className="text-center text-white text-xl font-medium font-['Space Grotesk'] leading-normal">Apply Now</div>
  </div>
</div>
</div>
  )
}

export default ebook
