import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="text-center py-4">
      <p className='text-white'>© {new Date().getFullYear()} <Link href="https://waleedcodes-portfolio.vercel.app/" target='_blank' rel="noopener noreferrer">@waleedcodes</Link>. All rights reserved.</p>
    </div>
  )
}

export default Footer