import React from 'react'

const Resume = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className="job-history col-span-2">
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


      </div>

      <div className='skills col-span-1'>
        <h3 className='text-2xl'>Skills</h3>
        <h4>I have 7 years experience with</h4>
        <ul className='skill-list'>
          <li className='skill'>Html5</li>
          <li className='skill'>CSS</li>
          <li className='skill'>Javascript</li>
        </ul>
        <h4>Including experience with</h4>
        <ul className='skill-list'>
          <li className='skill'>GSAP</li>
          <li className='skill'>Lottie</li>
          <li className='skill'>Wordpress:
              <ul>
                <li>Elementor</li>
                <li>DIVI</li>
              </ul>
          </li>

          <li className='skill'>React</li>
          <li className='skill'>Google DoubleClick Studio Banners
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
  )
}

export default Resume;