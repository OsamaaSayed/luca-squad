import { Metadata } from "next";
import Header from "@/components/shared/Header";
import ContactInfo from "./components/ContactInfo";
import Article from "./components/Article";

export const metadata: Metadata = {
  title: "Luca Squad | Contact Us",
  description:
    "We are happy to answer all your questions and discuss your construction needs.",
};

const ContactUs = () => {
  return (
    <>
      <Header bgImage="/images/contact/contact-bg.jpg" title="Contact Us" />
      <section className="flex w-full flex-col container py-14 lg:flex-row mx-auto">
        <ContactInfo />
        <Article />
      </section>
    </>
  );
};

export default ContactUs;
