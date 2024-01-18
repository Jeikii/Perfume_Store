import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <div className='w-[100%]'>
      <div className='flex items-center bg-[#eee] hover:bg-[#dfdfdf] rounded h-[40px]'>
        <input type="text" className='flex items-center bg-[#eee] w-[250px] h-[40px] rounded-l text-black text-xl outline-none pl-3'/>
        <button className='bg-[#ccc] h-[40px] rounded-r'><CiSearch size={26} className='m-auto'/></button>
      </div>
    </div>
  )
}

export default Search