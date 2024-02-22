import React from 'react'
import background from "../asset/background.png"
import Image from 'next/image'
import Wrapper from '../components/Wrapper'

function page() {
  return (
    <Wrapper>
    <section>
        <div className='backgroundimage'>
           <Image src={background} alt="background" className="background" />
        </div>
    </section>
    <section className="contact-section">
  <div className="contact-heading">
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us for any inquiries or to schedule an appointment. Our team is here to assist you.</p>
  </div>
</section>
<section  className='contact'>
    <div>
    <form action="#">
    <div>
        <div>
            <span className='span'>Full Name</span>
            <input type="text" placeholder="Enter your name" required />
        </div>
        <div>
            <span className='span'>User Name</span>
            <input type="text" placeholder="Enter your username" required />
        </div>
        <div>
            <span className='span'>Email</span>
            <input type="text" placeholder="Enter your email" required />
        </div>
        <div>
            <span className='span'>Password</span>
            <input type="password" placeholder="Enter your password" required />
        </div>
        <div>
            <span className='span'>Confirm Password</span>
            <input type="password" placeholder="Enter your Confirm password" required />
        </div>
        <div className='buton'>
            <span className='span'>Gender</span>
            <label>
                <input type="radio" name="gender" value="male" required />
                Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" required />
                Female
            </label>
            <label>
                <input type="radio" name="gender" value="other" required />
                Other
            </label>
        </div>
        <div>
            <input type="text" value="Register"/>
        </div>
    </div>
</form>

    </div>
</section>

    </Wrapper>
  )
}

export default page