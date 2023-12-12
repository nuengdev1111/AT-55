"use client"
import Image from 'next/image'
import King from '../../../public/king.png'
import styled from './background.module.scss'
 
export default function Background() {
  return (
    

    <Image
      className={styled.img}
      src={King}
      width={0}
      height={0}
      alt='king'
    />
  
      
    
  )
}