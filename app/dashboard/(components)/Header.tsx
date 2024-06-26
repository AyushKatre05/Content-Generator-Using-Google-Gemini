import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between'>
      <div className='flex gap-2 items-center p-2 border rounded-md'>
        <Search/>
        <Input/>
      </div>
      <div>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 '>Join Membership at $9/month</h2>
      </div>
    </div>
  )
}

export default Header