import AddProductsModal from "@/components/Modals/AddProductsModal";
import { ImBin } from "react-icons/im";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";
import { RiEditBoxLine } from "react-icons/ri";
import { Button } from "../Button/Button";
import AddCategoryModal from "@/components/Modals/AddCategoryModal";

export default function UpperActions() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <LuArrowUpToLine />
            Export
          </Button>
          <Button variant="outline">
            <LuArrowDownToLine />
            Import
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <RiEditBoxLine />
            Bulk Action
          </Button>
          <Button className="bg-red-500 hover:bg-red-700">
            <ImBin />
            Delete
          </Button>
          <AddProductsModal />
          {/* <AddCategoryModal></AddCategoryModal> */}
        </div>
      </div>
    </div>
  );
}
