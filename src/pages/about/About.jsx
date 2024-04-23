import { TbTargetArrow } from "react-icons/tb";
import { MdRemoveRedEye } from "react-icons/md";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about my-[60px] sm:my-[70px]">
        <div className="py-12 sm:py-20 about_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl">
            About Us
          </h2>
          <h2 className="mb-5 text-white text-md sm:text-md font-light text-center max-w-xl">
            Home / About Us
          </h2>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-5 py-4 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72080.png?v=1712918877"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              About Octa Tech Solutions
            </h1>
            <p className="mb-6 leading-relaxed">
              Octa Tech Solutions is a leading IT company offering a wide range
              of services including web development, app development, and more.
              We specialize in providing comprehensive digital solutions
              tailored to the unique needs of businesses and organizations
              across various industries.
            </p>
            <p className="mb-6 leading-relaxed">
              Our commitment at Octa Tech Solutions is to deliver exceptional
              services that drive innovation and help our clients achieve their
              goals. With a team of skilled professionals and a customer-centric
              approach, we strive to exceed expectations and deliver excellence
              in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- OUR MISSION & VISSION -----------  */}
      <section className="bg-[#1A73E8] text-white">
        <div className="py-5 sm:py-8 max-w-6xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* LEFT BOX */}
          <div className="left_box text-center px-4 sm:px-10 py-12 border-0 md:border-r">
            <TbTargetArrow className="mx-auto" size={50} />
            <h2 className="mt-3 text-4xl font-semibold ">Our Mission</h2>
            <p className="mt-3 font-light">
              Octa Tech Solutions is committed to delivering innovative IT
              solutions that empower businesses and individuals to thrive in the
              digital age. We strive to exceed client expectations by providing
              top-notch services in web development, app development, and more,
              tailored to their unique needs. Our mission is to be a trusted
              partner in our clients' success, fostering growth and innovation
              through technology.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="right_box text-center px-4 sm:px-10 py-12 border-t md:border-0">
            <MdRemoveRedEye className="mx-auto" size={50} />
            <h2 className="mt-3 text-4xl font-semibold">Our Vision</h2>
            <p className="mt-3 font-light">
              Our vision at Octa Tech Solutions is to become a globally
              recognized leader in IT services, known for our innovation,
              reliability, and commitment to excellence. We envision a future
              where technology is seamlessly integrated into every aspect of
              life, enhancing efficiency, connectivity, and opportunities for
              growth. By fostering a culture of continuous learning and
              collaboration, we aim to inspire positive change and make a
              meaningful impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-5 py-4 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 xl:pr-16 lg:pr-20 md:pr-16 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              About Octa Tech Solutions
            </h1>
            <p className="mb-6 leading-relaxed">
              Welcome to Octa Tech Solutions, your trusted partner for academic
              writing assistance. We take immense pride in being a reliable
              provider of top-notch academic services. Benefit from professional
              guidance and support from our team of experienced professionals
              with advanced degrees across various disciplines.
            </p>
            <p className="mb-6 leading-relaxed">
              At Octa Tech Solutions, we understand the challenges students face
              in their academic journeys. Hence, we offer comprehensive and
              affordable academic support tailored to your needs. Our primary
              goal is to deliver exceptional results and support your academic
              progress effectively.
            </p>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/about_us.webp?v=1713817469"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
