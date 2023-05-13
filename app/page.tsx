import Image from 'next/image'
import { Inter } from 'next/font/google'
import Projects from './projects/Projects'
import Intro2 from './intro/Intro2'
import Skills from './skills/Skills'
import Deployment from './deployment/Deployment'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div 
      className='lg:ml-16 ml-2 lg:mr-16 mr-2 lg:pt-24 pt-16 divide-y-2 divide-zinc-900/75'>
      <Intro2 />
      <Projects />
      <Skills />
      <Deployment />
    </div>
  )
}
