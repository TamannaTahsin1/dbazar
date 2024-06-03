import CustomersTable from "@/components/Table/CustomersTable";
import { Button } from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";
import React from "react";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

export default function page({
  searchPlaceholder,
  CategoryOptions,
  PriceOptions,
}) {
  return (
    <Container>
      <h1 className="my-10 text-lg font-semibold">Customers</h1>
      <div className="flex items-center gap-5">
        <Button variant="outline">
          <LuArrowUpToLine />
          Export
        </Button>
        <Button variant="outline">
          <LuArrowDownToLine />
          Import
        </Button>
      </div>
      <div className="mt-5 flex items-center justify-between gap-2">
        <Input placeholder={searchPlaceholder} className="w-72" />
        <div className="flex items-center justify-center gap-2">
          <Button className="bg-primary px-10">Filter</Button>
          <Button variant="outline" className="px-10">
            Reset
          </Button>
        </div>
      </div>
      <div className="my-10">
        <CustomersTable />
      </div>
    </Container>
  );
}
