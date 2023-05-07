import Head from 'next/head'
import About from '../components/About'
import Contact from '../../../brand/app/components/Contact'
import Main from '../../../brand/app/components/Main'
import Projects from '../components/Projects'
import Skills from '../../../brand/app/components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdul Rahman | Portfolio</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills /> 
    <Projects />
    <Contact />
    </div>
  )
}
