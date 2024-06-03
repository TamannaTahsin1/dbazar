import OurTeam from "@/components/OurTeam/OurTeam";
import WelcomeToEBazar from "@/components/WelcomeToEBazar/WelcomeToEBazar";
import Cover from "@/components/Cover/Cover";

export default function AboutUsPage() {
  return (
    <div>
      <Cover coverHeading="About Us" />
      <WelcomeToEBazar />
      <OurTeam />
    </div>
  );
}
