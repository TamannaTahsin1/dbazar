import { MdOutlineCloudUpload } from "react-icons/md";

export default function FileUpload() {
  return (
    <div className="flex justify-between">
      <span className="w-full">Product Image</span>
      <div className="w-full">
        <label
          htmlFor="file"
          className="mt-2 flex w-full flex-col items-center justify-between gap-1 rounded-lg border-2 border-dashed border-[#a1a1aa7e] p-4 hover:border-primary"
        >
          <MdOutlineCloudUpload size={30} className="text-primary" />
          Upload Product Image
          <span className="text-xs opacity-65">
            (Only*jpeg, *webp and *png images will be accepted)
          </span>
        </label>
        <input
          type="file"
          name=""
          id="file"
          className="w-fit text-center text-xs text-gray-500 file:hidden before:mr-2 before:content-['file-name:']"
        />
      </div>
    </div>
  );
}
