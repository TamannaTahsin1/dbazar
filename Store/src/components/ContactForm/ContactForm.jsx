import Image from "next/image";
import cartoon from "../../../public/Images/sigma.png";
import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
const ContactForm = () => {
  return (
    <Container>
      <div className="mt-20 flex flex-col items-center justify-between md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            className="rounded-lg object-cover"
            src={cartoon}
            alt="cartoon Image"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-[25px] font-medium">
            For any support just send your query
          </h1>
          <p className="py-2 text-sm text-gray-500">
            Collaboratively promote client-focused convergence vis-a-vis
            customer-directed alignments via plagiarized strategic users and
            standardized infrastructures.
          </p>
          <form className="my-10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-10">
              <Input
                placeholder="Enter Your Name"
                type="text"
                label="Name"
                id="name_contactUs"
              />
              <Input
                placeholder="Enter Your Email"
                type="email"
                label="Email"
                id="email_contactUs"
              />
            </div>
            <Input
              placeholder="Enter Your Subject"
              type="text"
              label="Subject"
              id="subject_contactUs"
            />
            <label htmlFor="message" className="mt-3 inline-block">
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-2 block w-full rounded-lg border p-2 text-sm shadow-[0px_0px_2px_#ddd] outline-none placeholder:text-xs focus:border-primary"
              placeholder="Write your message here"
            ></textarea>
            <Button className="mt-6 w-max px-10 py-3">Send</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
