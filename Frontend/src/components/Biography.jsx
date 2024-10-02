import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <h3>Who we Are?</h3>
        <p>We are a dedicated healthcare provider committed to delivering exceptional medical services to our community. With a team of experienced professionals, we strive to create a patient-centered environment where comfort and care go hand in hand. Our state-of-the-art facilities are equipped with the latest technology, ensuring that we offer a wide range of services, from routine check-ups to specialized treatments.</p>
        <p> We believe in the importance of holistic care, focusing not just on physical health but also on emotional well-being. Our mission is to empower our patients with the knowledge and resources they need to make informed health decisions. At our core, we are passionate about improving lives and making a positive impact on the health of those we serve.</p>
      </div>
    </div>
  )
}

export default Biography
