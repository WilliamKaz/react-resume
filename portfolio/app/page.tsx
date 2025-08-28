import  React  from "react";
import  Link   from "next/link";
import Image from 'next/image'

const App = () =>{
  return(
  <>

      <Link href="/resume">Resume</Link>
      <Link href="/portfolio">Porfolio</Link>

      <div className="portrait framed-img cover">

      <img
        src="/me.jpeg"
        alt="Picture of the author"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      </div>
  </>
  )
}

export default App