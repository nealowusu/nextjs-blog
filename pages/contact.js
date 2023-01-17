import Head from "next/head";
import ContactForm from "../components/contact/Contact-form";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name='description' content='Contact Ms' />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
