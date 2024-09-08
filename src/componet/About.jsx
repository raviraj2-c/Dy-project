import React from 'react'
import './About.css'
function About() {
  return (
    <div>
      <header>
        <h1>About Us</h1>
    </header>

    <main>
        <section id="mission">
            <h2>Our Mission</h2>
            <p>At [Hospital Name], our mission is to deliver top-quality, patient-centered care that enhances the well-being and quality of life for all those we serve. We are dedicated to advancing medical knowledge, promoting wellness, and providing a safe, nurturing environment where patients and their families feel valued and supported.</p>
        </section>

        <section id="history">
            <h2>Our History</h2>
            <p>Founded in [Year], [Hospital Name] has grown from a small clinic into a leading healthcare institution, known for its commitment to excellence and innovation. Our journey has been marked by numerous milestones, including [mention any notable achievements or expansions], all driven by our dedication to meeting the evolving needs of our community.</p>
        </section>

        <section id="team">
            <h2>Our Team</h2>
            <p>Our skilled and compassionate team of healthcare professionals includes board-certified doctors, experienced nurses, and dedicated support staff, all working together to deliver the highest standard of care. Each member of our team is committed to ensuring that every patient receives personalized attention and treatment tailored to their individual needs.</p>
            <div class="team-members">
                
                <div class="team-member">
                    <img src="team-member1.jpg" alt="Team Member 1"/>
                    <h3>[Team Member Name]</h3>
                    <p>[Team Member Title]</p>
                </div>
               
            </div>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of medical services, including [list some key services such as emergency care, surgery, maternity services, specialized treatments, etc.]. Equipped with the latest technology and adhering to the highest standards of safety and quality, we strive to provide exceptional care in every aspect of our practice.</p>
            <ul>
               
                <li>[Service 1]</li>
                <li>[Service 2]</li>
               
            </ul>
        </section>

        <section id="values">
            <h2>Our Values</h2>
            <ul>
                <li><strong>Compassion:</strong> We treat every patient with empathy, respect, and dignity.</li>
                <li><strong>Integrity:</strong> We uphold the highest ethical standards in all our interactions.</li>
                <li><strong>Excellence:</strong> We are committed to continuous improvement and innovation in healthcare.</li>
                <li><strong>Collaboration:</strong> We believe in working together with patients, families, and the community to achieve the best outcomes.</li>
            </ul>
        </section>

        <section id="community">
            <h2>Community Involvement</h2>
            <p>At [Hospital Name], we are deeply rooted in the community and actively engage in various outreach programs and health initiatives. Our goal is not only to provide excellent medical care but also to contribute positively to the health and wellness of our community through education and support.</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <p>We invite you to explore our website to learn more about our services and to meet our dedicated team. If you have any questions or need assistance, please don’t hesitate to contact us.</p>
            <ul>
                <li><strong>Phone:</strong> [Phone Number]</li>
                <li><strong>Email:</strong> [Email Address]</li>
                <li><strong>Address:</strong> [Hospital Address]</li>
            </ul>
            <a href="#" class="button">Schedule a Tour</a>
        </section>
    </main>

    <footer>
        <p>&copy; [Year] [Hospital Name]. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default About
