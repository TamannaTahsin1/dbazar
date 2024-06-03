import StoreSettingsUi from "@/components/StoreSettings/StoreSettingsUi";
import Container from "@/components/Container/Container";
import React from "react";

export default function page() {
  return (
    <Container>
      <h1 className="mb-5 text-lg font-semibold">Store Setting</h1>
      <StoreSettingsUi></StoreSettingsUi>
    </Container>
  );
}
