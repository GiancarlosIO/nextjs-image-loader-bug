import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import myImage from '../images/150.png'

const Home: NextPage = () => {
  return (
    <div style={{
      display: 'block'
    }}>
      <h1 style={{
        color: 'red'
      }}>Nextjs Custom Loader + Asset Prefix</h1>
      <Image src={myImage} alt="myimage" priority />
    </div>
  )
}

export default Home
