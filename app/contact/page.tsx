import React from "react";
import { ContactForm } from "./_components/contact-form";
import { Metadata } from "next";
import { getMetaData } from "lib/meta";

export const metadata = getMetaData({
  title: "Contact",
  description: "Contact Lakee Sivaraya",
});

const ContactPage = () => {
  return (
    <section className="px-8 md:px-24 pb-12 gap-8">
      <ContactForm />
    </section>
  );
};

export default ContactPage;
