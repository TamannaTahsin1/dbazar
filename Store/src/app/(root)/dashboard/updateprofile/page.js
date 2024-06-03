import { Button } from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { MdOutlineCloudUpload } from "react-icons/md";

export default function updateProfilePage() {
  return (
    <div className="w-full rounded-lg border p-10">
      <form action="">
        <h1 className="mb-3 text-xl font-medium">Update Profile</h1>
        <label htmlFor="file" className="opacity-75">
          Photo
        </label>
        <label
          htmlFor="file"
          className="z-10 mt-2 flex w-full flex-col items-center gap-1 rounded-lg border-2 border-dashed border-[#a1a1aa7e] p-4"
        >
          <MdOutlineCloudUpload size={30} className="text-primary" />
          Upload Your Image
          <span className="text-xs opacity-65">
            (Only*jpeg, *webp and *png images will be accepted)
          </span>
          <input type="file" name="" id="file" hidden />
        </label>
        <div className="my-3 flex gap-10">
          <Input type="text" id="_fullName_update_profile" label="Full Name" />
          <Input type="text" id="_address_update_profile" label="Address" />
        </div>
        <div className="flex gap-10">
          <Input type="number" id="_number_update_profile" label="Number" />
          <Input type="email" id="_email_update_profile" label="Email" />
        </div>
        <Button type="submit" className="ml-auto mr-0 mt-3 w-fit">
          Update Profile
        </Button>
      </form>
    </div>
  );
}
