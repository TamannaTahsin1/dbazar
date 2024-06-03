"use client";
import ContentBorder from "@/components/ContentBorder/ContentBorder";
import Sidebar from "@/components/SideBar/Sidebar";
import Container from "@/components/Container/Container";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import OrderServices from "@/syncs/OrderSync";

export default function layout({ children }) {
  const { state } = useContext(UserContext);
  const router = useRouter();
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(async () => {
    setIsLoading(false);
    if (!state.userInfo) {
      router.push("/login");
    }
    const data = await OrderServices.getOrderCustomer();
    setData(data);
  }, [state.userInfo]);

  if (loading) return <div>Loading...</div>;
  return (
    <Container>
      <ContentBorder data={data} />
      <div className="my-10 flex justify-between gap-10">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[75%]">{children}</div>
      </div>
    </Container>
  );
}
