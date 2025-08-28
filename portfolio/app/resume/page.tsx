import React from 'react'

const Resume = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-2 mx-4 my-10'>
        <div className='col-span-3 md:col-span-2 '>
          <h1 className='text-4xl my-1'>William Kasurak</h1>
          <h2 className='text-3xl my-2'>Front-end Web Developer</h2>
          <hr className='mb-5'></hr>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <h3 className='text-lg my-1'>Concord Ave</h3>
          <h3 className='text-lg my-1'>Toronto, ON</h3>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2 mx-4'>
        <div className="job-history col-span-3 md:col-span-2 ">
          <div className='job'>
            <h3 className='text-2xl'>
              <span className='job-company'>Publicis</span>,
              <span className='job-city'> Toronto</span>
              <span className='job-title'> Interactive Developer</span>
            </h3>
            <h5 className='text-xs'>Aug 2019 - July 2025</h5>
            <p className='text-base'>
              As part of the interactive development team at Publicis,
              I used my front-end skills to execute animated and dynamic
              banner advertisements on several deployment platforms and
              websites, big and small. With the team, I worked within
              the content management systems powering multinational websites
              for the Canadian and American Markets, familiarizing myself
              with the workflows specific to the respective CMS and helping
              other team members onboard onto them. I have had the
              opportunity to work on exciting, limited-time microsites
              for brand activations, charities, and brand pitches.
              </p>
          </div>
          <div className='job'>
            <h3 className='text-2xl'>
              <span className='job-company'>Profilio,</span>
              <span className='job-city'> Toronto</span>
              <span className='job-title'> Junior front-end developer</span>
            </h3>
            <h5 className='text-xs'>Aug 2019 - July 2025</h5>
            <p className='text-base'>
              A digital design and development shop.
              Using my expertise in HTML5, JavaScript (ES6),
              and SCSS, I worked closely with the team’s
              senior front-end developer and product designer to
              bring various digital products to life for a range of
              clients, from small to large.
            </p>
          </div>
          <hr className='mb-5'></hr>
          <div className='education'>
            <h3 className='text-2xl'>
              <span className='edu-school'>Lighthouse Labs,</span>
              <span className='edu-city'> Toronto</span>
              <span className='edu-degree'> - Certificate</span>
            </h3>
            <h4 className='text-l edu-program'>Full Stack Web Development bootcamp</h4>
            <h5 className='text-xs'>Aug 2019 - July 2025</h5>
            <p className='text-base'>
              At Lighthouse Labs, I completed the full-stack bootcamp to
              refresh and deepen my fundamentals of modern full-stack
              progressive websites and web applications.
            </p>
          </div>
          <div className='education'>
            <h3 className='text-2xl'>
              <span className='edu-school'>OCAD University,</span>
              <span className='edu-city'> Toronto</span>
              <span className='edu-degree'> - Bachelor of Design</span>
            </h3>
            <h4 className='text-l edu-program'>Digital Futures: Technology Innovation Design & Art</h4>
            <h5 className='text-xs'>Jul 2018 - Sept 2018</h5>
            <p className='text-base'>
              My time in the Digital Futures: TIDA  program was spent
              learning the craft of design through the lenses of
              both physical and digital experiences. The program
              focused on experimental game design (encompassing
              everything from video games to live-action
              role-playing games, or LARP, and board games),
              Futurism, and Storytelling, and New media art.
              I began the journey of learning code through
              making simple sites and using learning and the
              fundamentals  of JavaScript to be used inside
              the game engine Unity, as well as Arduino
              for physical computing.
            </p>
          </div>
          <hr className='mb-5'></hr>

        </div>


        <div className=' col-span-2 md:col-span-1 '>
          <div className='skills border-2 rounded-xl p-2 py-3 height-fit'>

          <h3 className='text-2xl'>Skills</h3>
          <h4 className='text-xl'>I have 7 years experience with:</h4>
          <hr className='mb-1'></hr>
          <ul className='skill-list'>
            <li className='skill'>Html5</li>
            <li className='skill'>CSS</li>
            <li className='skill'>Javascript</li>
          </ul>
          <h4 className='text-xl'>But I've also experience with:</h4>
          <hr className='mb-1'></hr>
          <ul className='skill-list'>
            <li className='skill'>GSAP</li>
            <li className='skill'>Lottie</li>
            <li className='skill'>Wordpress:
                <ul>
                  <li>Elementor</li>
                  <li>DIVI</li>
                  <li>Guttenberg</li>
                </ul>
            </li>
            <li className='skill'>React</li>
            <li className='skill'>Google DoubleClick Studio Banners:
                <ul>
                  <li>Standard Animated</li>
                  <li>Dynamic Animated</li>
                  <li>Richmedia</li>
                </ul>
            </li>
            <li className='skill'>Flashtalking</li>
            <li className='skill'>Adobe Photoshop</li>
            <li className='skill'>Adobe Illustrator</li>
            <li className='skill'>Adobe Premiere</li>
            <li className='skill'>Adobe Afters Effects</li>
          </ul>
          </div>
        </div>


      </div>
    </>
  )
}

export default Resume;