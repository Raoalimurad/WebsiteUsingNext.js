import React from 'react'
import Wrapper from "../components/Wrapper"
import Image from 'next/image';
import footerlogo from "../asset/footerlogo.png"

function footer() {
  return (
    
    <section className='adjustfooter'>
        <div className='footer'>
            <div>
                <Image src={footerlogo} alt="footerlogo"/>
            </div>
            <div >
                <h2>Product</h2>
                <ul  className='footerul'>
                    <li>Features</li>
                    <li>Case studies</li>
                    <li>Updates</li>
                </ul>
            </div>
            <div>
                <h2>Company</h2>
                <ul className='footerul'>
                    <li>About</li>
                    <li>Case studies</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h2>Support</h2>
                <ul className='footerul'>
                    <li>Blog</li>
                    <li>Chat support</li>
                    <li>Updates</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default footer