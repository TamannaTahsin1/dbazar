import Container from "@/components/Container/Container";
import Image from "next/image";
import member1 from "../../../public/Images/member1.png";
import member2 from "../../../public/Images/member2.png";
import member3 from "../../../public/Images/member3.png";
import member4 from "../../../public/Images/member4.png";
import member5 from "../../../public/Images/member5.png";

const OurTeam = () => {
  return (
    <Container>
      <div className="mt-20">
        <h4 className="text-2xl font-medium">Our Team</h4>
        <p className="py-4">
          We’re impartial and independent, and every day we create distinctive,
          <br /> world-class reintermediate backend supply programmes.
        </p>
        <div className="flex flex-wrap justify-center gap-y-4 md:justify-between">
          <Image
            className="rounded-lg object-cover"
            width={200}
            height={175}
            src={member1}
            alt="member 1"
            loading="lazy"
          />
          <Image
            className="rounded-lg object-cover"
            width={200}
            height={175}
            src={member2}
            alt="member 2"
            loading="lazy"
          />
          <Image
            className="rounded-lg object-cover"
            width={200}
            height={175}
            src={member3}
            alt="member 3"
            loading="lazy"
          />
          <Image
            className="rounded-lg object-cover"
            width={200}
            height={175}
            src={member4}
            alt="member 4"
            loading="lazy"
          />
          <Image
            className="rounded-lg object-cover"
            width={200}
            height={175}
            src={member5}
            alt="member 5"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
