import React from 'react'
import WhyCard from './WhyCard';
import Container from './container';

const WhyUs = () => {
  return (
    // <Container
      <Container className="flex flex-wrap ">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 '>
          {reasons?.map((reason) => (
            <WhyCard reason={reason} key={reason.id} />
            //   < key={reason?.id} product={reason} />
          ))}
      </div>
      </Container>
  )
}

const reasons = [
    {
        id: 1,
        title: "Top-Level Experienced Designers",
        description: "When you choose Dunamis Solar.Energy, you're tapping into the expertise of top-level experienced designers.Our team brings years of industry experience and innovative thinking to every project, guaranteeing exceptional results."
    },
    {
        id: 2,
        title: "Fastest Turnaround Time (TAT)",
        description: "We understand the importance of timely project completion. With our efficient processes and dedicated team, we offer the fastest TAT in the industry, ensuring your solar project gets off the ground swiftly."
    },
    {
        id: 3,
        title: "Best Price Range:",
        description: "Quality service shouldn't come with a hefty price tag. We offer competitive pricing without compromising on excellence, providing the best value for your investment."
    },
    {
        id: 4,
        title: "Extensive Knowledge Base of AHJs' Requirements.",
        description: "Navigating the nuances of local regulations can be challenging. Our team possesses an extensive knowledge base of AHJs' requirements, ensuring compliance and smooth permitting processes."
    },
    {
        id: 5,
        title: "Focus on Client Benefits",
        description: "Your satisfaction is our priority. We focus on delivering tangible benefits to our clients, from cost savings to environmental impact, ensuring that your solar project exceeds expectations."
    },
    {
        id: 6,
        title: "24x7 Customer Support",
        description: "Need assistance? We're here for you around the clock. Our 24x7 customer support ensures that you receive prompt assistance whenever you need it, providing peace of mind throughout your project journey."
    },
    {
        id: 7,
        title: "Scalable Workforce",
        description: "No project is too big or too small. With a scalable workforce, we have the flexibility to adapt to your project's needs, ensuring efficient resource allocation and timely delivery."
    },
    {
        id: 8,
        title: "Elaborated Quality Management Process",
        description: "Quality is at the core of everything we do. Our elaborated quality management process ensures that every aspect of your solar project meets the highest standards of excellence, from design to execution."
    },
    
];

export default WhyUs