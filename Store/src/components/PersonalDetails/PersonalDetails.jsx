import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";

export default function PersonalDetails() {
  return (
    <div>
      <h1 className="font-semibold">Personal Details</h1>
      <div className="mt-3">
        <div className="flex justify-between sm:gap-10">
          <Input type="text" label="First Name" id="_first_name_checkout" />
          <Input type="text" label="Last Name" id="_last_name_checkout" />
        </div>
        <div className="flex justify-between sm:gap-10">
          <Input
            type="email"
            label="Email Address"
            id="_email_address_checkout"
          />
          <Input
            type="number"
            label="Phone Number"
            id="_phone_number_checkout"
          />
        </div>
      </div>
    </div>
  );
}
