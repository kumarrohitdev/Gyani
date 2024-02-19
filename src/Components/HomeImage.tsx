import Image from 'next/image'
import React from 'react'

export default function HomeImage() {
  return (
    <div>
<Image src='/Google.png' alt='google image' height={500} width={500} className='h-auto w-auto' priority
/>    </div>
  )
}
