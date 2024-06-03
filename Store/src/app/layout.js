import { UserProvider } from "@/context/UserContext";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "D Bazar",
  description: "",
  openGraph: {
    images: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <UserProvider>{children}</UserProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
