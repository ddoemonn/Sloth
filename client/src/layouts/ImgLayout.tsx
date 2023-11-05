import React from 'react'

export default function ImgLayout({imageUrl} : {imageUrl: string}) {
  return (
    <img
    src={imageUrl}
    className='w-[350px] h-[440px] object-cover'
    alt={'item'}
/>
  )
}
