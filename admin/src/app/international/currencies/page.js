import CurrencyTable from "@/components/Table/CurrencyTable";
import AddCurrency from "@/components/Modals/AddCurrency";
import AddProductsModal from "@/components/Modals/AddProductsModal";
import { Button } from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";
import React from "react";
import { ImBin } from "react-icons/im";
import { RiEditBoxLine } from "react-icons/ri";

export default function page({ searchPlaceholder }) {
  return (
    <Container>
      <h1 className="mb-10 text-lg font-semibold">Currencies</h1>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder={searchPlaceholder} className="w-72" />
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
          <AddCurrency />
        </div>
      </div>
      <CurrencyTable></CurrencyTable>
    </Container>
  );
}
