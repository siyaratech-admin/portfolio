import SiyaraTechFeatures from "@/components/SiyaraTechFeatures";

export const projects = [
  {
    title: "Client-Centric Approach",
    description:
      "We prioritise your needs and tailor solutions to meet your specific requirements",
    link: "",
  },
  {
    title: "Expertise and Innovation",
    description:
      " Our team stays ahead of industry trends to provide innovative solutions",
    link: "",
  },
  {
    title: "Quality Assurance",
    description:
      "We are committed to delivering high-quality services that exceed expectations.",
    link: "",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We offer competitive pricing without compromising on quality.",
    link: "",
  }
];
// About Us page
const About = () => {
  return (
    <section id="about" className="px-16 py-20 ">
      <div className="flex-col mx-auto space-y-32">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <div className="w-20 h-1 bg-red-500"></div>
        </header>
        <div className="flex-col space-y-8 md:space-y-16">
        <h3 className="text-2xl font-semibold mb-4 order-first">Our Story</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="flex-2 flex-col space-y-8 h-full order-last">
            <div>

              <p className="mb-4 leading-loose">At SIYARATECH INNOVATIONS LLP, we started with a clear goal: to empower businesses with custom IT solutions that drive growth and efficiency. Founded by industry experts in Talent Outsourcing, Artificial Intelligence solutions, and Cloud Services, we recognized the need for scalable and innovative solutions in today’s tech landscape. From partnering with startups to global enterprises, our journey is one of continuous innovation, dedication to quality, and a passion for helping businesses thrive in the digital era. We focus on creating tailored solutions that solve real business challenges, ensuring our clients stay competitive and ahead of industry trends.
              </p>
              {/* <p className="mb-4 leading-loose">At <span className="font-semibold text-purple-200">SIYARATECH INNOVATIONS LLP</span>, we started with a clear goal: <span className="font-semibold">to empower businesses with custom IT solutions</span> that drive growth and efficiency. Founded by industry experts in <span className="font-semibold">Talent Outsourcing, Artificial Intelligence solutions</span>, and <span className="font-semibold">Cloud Services</span> , we recognized the need for scalable and innovative solutions in today’s tech landscape. From partnering with startups to global enterprises, our journey is one of <span className="font-semibold">continuous innovation</span>,<span className="font-semibold">dedication to quality</span> , and a passion for helping businesses thrive in the digital era. We focus on creating <span className="font-semibold">tailored solutions</span> that solve real business challenges, ensuring our clients stay competitive and ahead of industry trends.
              </p> */}
            </div>


          </div>
          <div className="h-full order-2 md:order-last">
            <img src="story.png"
              alt="About"
              object-fit="cover"
              className="rounded-lg "
              loading="lazy"

            />
          </div>

        </div>
        <h3 className="text-2xl font-semibold mb-4 order-first">Our Mission</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="h-full order-2">
            <img src="mission.png"
              alt="About"
              object-fit="cover"
              className="rounded-lg "
              loading="lazy"

            />
          </div>
          <div className="w-full h-full order-last">
            <p className="leading-loose">Our mission at SIYARATECH INNOVATIONS LLP is to be a leading IT solutions provider, delivering impactful and innovative technologies that empower businesses to succeed. We are committed to:
              <ul className="p-2 list-disc">
                <li><span className="font-semibold">Providing top-tier talent outsourcing services</span> to bridge skill gaps and fuel business growth.
                </li>
                <li><span className="font-semibold">Developing advanced AI-driven solutions</span> that enhance efficiency, productivity, and decision-making.
                </li>
                <li><span className="font-semibold">Offering certified cloud services</span> that provide secure, scalable, and cost-effective solutions.</li>
                <li><span className="font-semibold">Executing project management</span> with precision, ensuring projects are delivered on time, on budget, and with exceptional results.</li>
              </ul>
              We are dedicated to providing cutting-edge IT solutions that help businesses scale, innovate, and achieve sustainable success.
            </p>
          </div>



        </div>

        <div className="flex-col space-y-8">
        <h3 className="text-2xl font-semibold mb-4 order-first">Our Team</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="w-full h-fit order-last">
              <p className="leading-loose">At SIYARATECH INNOVATIONS LLP, our success is built on the expertise and dedication of our team. Our specialists bring together decades of experience in technology, management, and innovation, ensuring we deliver top-notch solutions to every client. Our team includes:

                <ul className="p-2 list-disc">
                  <li><span className="font-semibold">AI Experts</span> who design and implement custom AI solutions tailored to meet specific business needs.

                  </li>
                  <li><span className="font-semibold">Cloud Architects</span> with in-depth knowledge of AWS, Azure, and Google Cloud, ensuring seamless integration and future-proof infrastructure.

                  </li>
                  <li><span className="font-semibold">Certified Project Managers</span> who lead with precision and ensure timely, cost-effective project delivery.</li>
                  <li><span className="font-semibold">Talent Acquisition Specialists</span> who source, screen, and deliver the right talent to meet your company’s IT staffing requirements.
                  </li>
                </ul>
              </p>

            </div>
            <div className="h-full  order-2 md:order-last">
              <img src="team.jpg"
                alt="About"
                object-fit="cover"
                className="rounded-lg "
                loading="lazy"

              />
            </div>


          </div>
          <div>
            <p className="flex-col leading-loose space-y-8">
              Our team is passionate about innovation, driven by results, and committed to helping your business succeed with best-in-class IT services.

              By focusing on cutting-edge technology solutions and outstanding client service, SIYARATECH INNOVATIONS LLP stands out as a trusted partner for businesses looking to optimize IT operations, leverage cloud technologies, and build custom AI solutions that deliver measurable results.

            </p>
            <p className="leading-loose text-2xl font-semibold text-center py-8">
              Let’s collaborate to transform your business with future-ready IT solutions.
            </p>
          </div>
        </div>


        </div>
        <div className="flex-col space-y-4 mt-16">

          <div>
            <h3 className="text-3xl font-semibold mb-4">Why Choose SIYARATECH</h3>
            <SiyaraTechFeatures />
          </div>
        </div>
      </div>

    </section>
  )
}
export default About