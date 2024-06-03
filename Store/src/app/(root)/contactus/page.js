import ContactForm from "@/components/ContactForm/ContactForm";
import Contacts from "@/components/Contacts/Contacts";
import Cover from "@/components/Cover/Cover";
export default function ContactPage() {
  return (
    <div>
      <Cover coverHeading="Contact Us" />
      <Contacts />
      <ContactForm />
    </div>
  );
}
