import Wrapper from "./components/Wrapper"
import Image from 'next/image';
import doctor1 from "./asset/doct2.webp"
import treatment from "./asset/treatment.png"
import teeth from "./asset/teeth.png"
import leg from "./asset/lrg.png"
import diagnose from "./asset/diagnose.png"
import cardiology from "./asset/cardiology.png"
import surgery from "./asset/surgery.png"
import eyecare from "./asset/eyecare.png"
import member1 from "./asset/member1.png"
import member2 from "./asset/member2.png"
import member3 from "./asset/member3.png"





const home = () => {

  return (
    <Wrapper>
      <section className="hero1  herr">
        <div className="heading">
          <h1>Providing Quality <span className="health">Healthcare</span> for a <span>Brighter</span>  and <span>Healthy </span>Future</h1>
          <p>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
          <button className="btn">Appointment Book</button>
        </div>
        <div className="doctor">
          <div className="minidoc">
            <Image src={doctor1} alt="doctor logo" className="doc" />
          </div>
        </div>
      </section>
      <section className="hero2">
        <div className="results">
          <h1>Our results in numbers</h1>
        </div>
        <div className="about">
          <div><h2>99%</h2><h5>Customer satisfaction</h5></div>
          <div><h2>15k</h2><h5>Online Patients</h5></div>
          <div><h2>12k</h2><h5>Patients Recovered</h5></div>
          <div><h2>240%</h2><h5>Company growth</h5></div>
        </div>

      </section>

      <section className="hero1">
        <div className="heading2">
          <h1>You have lots of reasons to choose us</h1>
          <p>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
          <button className="btn">Appointment Book</button>
        </div>
        <div className="doc2">
          <div className="treatment">
            <Image src={treatment} alt="doctor logo" className="treatmentpic" />
          </div>
        </div>
      </section>

      <section >
        <div className="service">
          <h1>Services we provide </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing <br />elit semper dalar elementum tempus hac tellus libero accumsan. </p>
        </div>
      </section>
      <section className="cards">
        <div className="card">
          <div className="imgage">
            <Image src={leg} alt="doctor logo" className="teeth" />
          </div>
          <h3>Dental treatments</h3>
          <h6>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</h6>
          <h6>Learn More</h6>
        </div>
        <div className="card">
          <div className="imgage">
            <Image src={teeth} alt="doctor logo" className="teeth" />
          </div>
          <h3>Dental treatments</h3>
          <h6>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</h6>
          <h6>Learn More</h6>

        </div>
        <div className="card">
          <div className="imgage">
            <Image src={diagnose} alt="doctor logo" className="teeth" />
          </div>
          <h3>Dental treatments</h3>
          <h6>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</h6>
          <h6>Learn More</h6>

        </div>


      </section>
      <section className="cards  minicard">
        <div className="card">
          <div className="imgage">
            <Image src={cardiology} alt="doctor logo" className="teeth" />
          </div>
          <h3>Dental treatments</h3>
          <h6>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</h6>
          <h6>Learn More</h6>
        </div>
        <div className="card">
          <div className="imgage">
            <Image src={surgery} alt="doctor logo" className="teeth" />
          </div>
          <h3>Dental treatments</h3>
          <h6>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</h6>
          <h6>Learn More</h6>

        </div>
        <div className="card">
          <div className="imgage">
            <Image src={eyecare} alt="doctor logo" className="teeth" />
          </div>
          <h3>Dental treatments</h3>
          <h6>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</h6>
          <h6>Learn More</h6>

        </div>


      </section>

      <section >
        <div className="service meet">
          <h1>Meet our team members</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing <br />elit semper dalar elementum tempus hac tellus libero accumsan. </p>
        </div>
      </section>
      <section>
        <div className="member">
          <div className="members">
            <Image src={member1} alt="doctor logo" className="mem1" />
            <p>John Carter</p>
            <h5>CEO & Co-Founder</h5>
            <h6>Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </h6>
          </div>
          <div className="members">
            <Image src={member2} alt="doctor logo" className="mem1" />
            <p>John Carter</p>
            <h5>CEO & Co-Founder</h5>
            <h6>Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </h6>
          </div>
          <div className="members">
            <Image src={member3} alt="doctor logo" className="mem1" />
            <p>John Carter</p>
            <h5>CEO & Co-Founder</h5>
            <h6>Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </h6>
          </div>
        </div>
      </section>

    </Wrapper>


  )
}
export default home