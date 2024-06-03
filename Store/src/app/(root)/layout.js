import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GetYourDailyNeeds from "@/components/GetYourDailyNeeds/GetYourDailyNeeds";

export const metadata = {
  title: "D Bazar",
  description: "",
  openGraph: {
    images: "",
  },
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <GetYourDailyNeeds />
      <Footer />
    </>
  );
}
