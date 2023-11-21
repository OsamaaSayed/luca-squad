import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/shared/Header";
import AboutSection from "./components/AboutSection";

export const metadata: Metadata = {
  title: "Luca Squad | About Us",
  description:
    "a state-of-the-art construction company with an established reputation for excellence and integrity. Founded in Milan, Italy, we are committed to the construction industry with an emphasis on precision, innovation and customer satisfaction. Every project we undertake reflects our dedication to detail and quality, while our decades of experience enable us to successfully tackle a wide range of projects, from luxury residential complexes to commercial renovations.",
};
const About = () => {
  return (
    <>
      <Header bgImage="/images/about/about-bg.jpg" title="About Us" />
      <section className="relative px-10 pt-14 md:px-24">
        <div className="flex w-full flex-col gap-9  lg:flex-row">
          <Image
            src="/images/about/about-section.jpg"
            width={711}
            height={448}
            alt="about section"
            className="hidden w-full flex-1 lg:block"
          />
          <AboutSection />
          <Image
            src="/images/about/about-section.jpg"
            width={711}
            height={448}
            alt="about section"
            className=" block w-full flex-1 lg:hidden"
          />
        </div>
        <p className="mt-8 font-medium">
          We are guided by a philosophy that focuses on integrity and a
          commitment to excellence. Our team is made up of qualified
          professionals capable of tackling complex challenges with expertise
          and creativity. Each project represents an opportunity for us to
          demonstrate our ability to produce durable, high-quality work. Our
          mission is to exceed clients&apos; expectations through an unwavering
          commitment to innovation and excellence, while maintaining high
          ethical standards.
        </p>
      </section>
    </>
  );
};

export default About;
