import React from 'react'
import background from "../asset/background.png"
import Image from 'next/image'
import Wrapper from '../components/Wrapper'
import test1 from "../asset/test1.png"
import test2 from "../asset/test2.png"
import test3 from "../asset/test3.png"
import div1 from "../asset/div.png"
import div2 from "../asset/div2.png"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(faStar);


function page() {
    return (
        <div>
            <Wrapper>
                <div className='aboutbackground'>
                    <div>
                        <div className='parent-container'>
                            <div className='hospital'>
                                <h1>Meet the Best Hospital</h1>
                                <p>We know how large objects will act,
                                    but things on a small Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, consequuntur!</p>
                                <button className='btn1'>Get Quote Now</button>
                                <button className='btn2'>Learn More</button>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>


                </div>
                <div className='faq'>
                    <h1>FAQ</h1>
                    <p>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='mainfaq'>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                </div>
                <div className='mainfaq'>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                </div>
                <div className='mainfaq'>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                    <div className='faqmini'>
                        <h4>the quick fox jumps over the
                            lazy dog</h4>
                            <h5>Things on a very small scale 
behave like</h5>
                    </div>
                </div>
                <div className='testimonial'>
                    <h1>Testimonial</h1>
                    <p>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='maintestimonial'>
                    <div className='testimonail1'>
                       <Image src={test1} alt="test1"/>
                       <h4>“An amazing service”</h4>
                       <h5>Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</h5>
                    </div>
                    <div className='testimonail1'>
                       <Image src={test2} alt="test1"/>
                       <h4>“One of a kind service”</h4>
                       <h5>Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</h5>
                    </div>
                    <div className='testimonail1'>
                       <Image src={test1} alt="test1"/>
                       <h4>“The best service”</h4>
                       <h5>Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</h5>
                    </div>

                    <div className='customers'>
                    <h1>what our customers say</h1>
                    <p>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                </div>
                <div className='customer'>
                    <div className='minicustomer'>
                    <span><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /></span>
                    <h5>Slate helps you see how many more days you need to work to reach your financial goal.</h5>
                    <Image src={div1} alt="div1" className='div1'/>
                    </div>
                    <div className='minicustomer'>
                    <span><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /></span>
                    <h5>Slate helps you see how many more days you need to work to reach your financial goal.</h5>
                    <Image src={div2} alt="div1" className='div1'/>
                    </div>
                    <div className='minicustomer'>
                    <span><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['fas', 'star']} /></span>
                    <h5>Slate helps you see how many more days you need to work to reach your financial goal.</h5>
                    <Image src={div1} alt="div1" className='div1'/>
                    </div>
                   </div>
            </Wrapper>
        </div>
    )
}

export default page
// YourComponent.js





    //   <FontAwesomeIcon icon={['fas', 'star']} />
 



