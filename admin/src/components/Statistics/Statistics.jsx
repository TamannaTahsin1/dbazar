import Container from "@/components/Container/Container";
import React from "react";
import TodaysSales from "./TodaysSales";
import OverView from "./OverView";

export default function Statistics() {
  return (
    <Container>
      <div className="flex flex-wrap justify-between gap-10">
        <TodaysSales />
        <OverView />
      </div>
    </Container>
  );
}
