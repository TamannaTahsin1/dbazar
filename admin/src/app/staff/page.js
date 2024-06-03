import AddStuff from "@/components/Modals/AddStuff";
import StaffTable from "@/components/Table/StaffTable";
import { Button } from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Input from "@/components/Input/Input";
import React from "react";

export default function page({ searchPlaceholder }) {
  return (
    <div>
      <Container>
        <h1 className="mb-10 text-lg font-semibold">Staffs</h1>
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Input placeholder={searchPlaceholder} className="w-72" />
          </div>
          <div className="flex items-center gap-2">
            <AddStuff />
            <Button className="bg-primary px-10">Filter</Button>
            <Button variant="outline" className="px-10">
              Reset
            </Button>
          </div>
        </div>
        <div className="my-10">
          <StaffTable></StaffTable>
        </div>
      </Container>
    </div>
  );
}
