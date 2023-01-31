import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Myname from '@/componets/changeName/Myname'
import ThreeDot from '@/componets/spreadOperator/ThreeDot'
import LoginPage from '@/componets/loginForm/LoginPage'
import UseEffect1 from '@/componets/useEffect/UseEffect1'
import UseEffect2 from '@/componets/useEffect/UseEffect2'
import UseArrayState from '@/componets/useArrayHooks/UseArrayState'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
     <h1>Hooks</h1>  
     {/* <Myname/>  */}
     {/* <UseArrayState /> */}
     {/* <ThreeDot /> */}
     {/* <LoginPage/> */}
     {/* <UseEffect1 /> */}
     <UseEffect2 />
      </>
  )
}
