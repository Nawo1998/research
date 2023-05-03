import React from 'react'
import './Home.css'
import image from '../images/hom1.jpeg'

export default function Home() {
  return (
    <div className="ho1">
      <h1>Telemedicine Systems in Sri Lanka</h1>
      <img src={image} alt='' className="im1"/>
        <div className="ho2">
        
            <div className="ho3">
            <h3>
                What is telemedicine?
            </h3>
            Telehealth refers to providing broader scope of remote healthcare services and technologies than in telemedicine.
            Telemedicine can be considered as a subset of telehealth and that refers solely to the provision of healthcare services
            and education over a distance.As result of the advancement of internet and technology, telemedicine is widely used
            for provoding quality healthcare services when people are unable to access healthcare services physically. 
            </div>

            <div className="ho4">
            
            </div>
        </div>


        <div className="ho5">
            <div className="ho6">
            <h3>
              Increase of Telemedicine
            </h3>
            During the COVID-19 pandemic, telemedicine based healthcare systems were really useful as the people affrid
            to visit healthcare centers physically.Telemedicine has been used extensively across many countries such as China, 
            USA, Italy and India during the COVID-19 pandemic.A center for Disease Control and Prevention(CDC) reported that a 
            154% increase in remote telemedicine visits in March 2020, over the previous period in 2019.
            
            </div>

            <div className="ho7">

            </div>
        </div>

        <div className="ho8">
            <div className="ho9">
            <h3>
              Why people hesitate?
            </h3>
            Even in Sri Lanka, which is lower-middle-income country, people were encouraged and motivated by the government providing 
            essential infrastructure due to its worthiness. However, sometmes people hesitate to engage in telemedicine based 
            healthcare services due to continuously reporting data breeches and unpleasant experinces. 
            Although government has published several polices on digital data handling they are not specifically applicable for
            the telehealth or telemedicine context. Therefore due to these leakages in the policy protocols in Sri Lanka and 
            patients not having proper understanding on how telemedicine systems work, most of the time patients may fall into
             traps and get vulnerable.
            </div>
            <div className="ho10">

            </div>
        </div>

        <div className="ho11">
          <div className="ho12">
          <h3>
              Understanding about telemedicine
            </h3>
             Before initiating development of policies or further facilities, it is important to open up people's mind towards telemedicine based systems. For that it's essential to understand their knowledge level on privacy and policies regarding 
             digital data privacy and security in healthcare systems in order to provide suitable responses. As the security and privacy has been identified  as a key factor of telemedicine and telehealth applications. We expect to do a through 
             analysis of existing security and privacy factors considered in other countries and analyzing the current security and privacy concerns in Sri Lanka to develop our self-assessment mechanism.
          </div>
          <div className="ho13">
          
          </div>
        </div>
      
    </div>
  )
}
