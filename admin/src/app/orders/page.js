import React from "react";
import OrdersTable from "@/components/Table/OrdersTable";
import Container from "@/components/Container/Container";

import OrdersButton from "@/components/Button/OrdersButton";

export default function page() {
  return (
    <Container>
      <h1 className="mb-10 text-lg font-semibold">Orders</h1>
      <OrdersButton />
      <div className="my-10">
        <OrdersTable></OrdersTable>
      </div>
    </Container>
  );
}
