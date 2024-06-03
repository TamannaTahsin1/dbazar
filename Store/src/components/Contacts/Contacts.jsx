import Container from "@/components/Container/Container";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";

export default function Contacts() {
  return (
    <Container>
      <div className="my-6 flex flex-wrap justify-center lg:justify-around">
        <div className="flex w-[230px] flex-col items-center justify-center space-y-2 rounded-md border p-6">
          <FaEnvelope className="text-gray-700" size={40} />
          <p className="text-[20px] text-gray-700">ebazar@gmail.com</p>
        </div>
        <div className="flex w-[230px] flex-col items-center justify-center space-y-2 rounded-md border p-6">
          <MdAddCall className="text-gray-700" size={40} />
          <p className="text-[20px] text-gray-700">+976545257</p>
        </div>
        <div className="flex w-[230px] flex-col items-center justify-center space-y-2 rounded-md border p-6">
          <FaLocationDot size={40} className="text-gray-700" />
          <p className="text-[20px] text-gray-700">Banani, Dhaka</p>
        </div>
      </div>
    </Container>
  );
}
