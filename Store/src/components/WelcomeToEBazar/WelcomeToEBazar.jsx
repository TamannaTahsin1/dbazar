import Image from "next/image";
import bazar1 from "../../../public/Images/bazar1.png";
import bazar2 from "../../../public/Images/bazar2.png";
import bazar3 from "../../../public/Images/bazar3.png";
import bazar4 from "../../../public/Images/bazar4.png";
import Container from "@/components/Container/Container";

export default function WelcomeToEBazar() {
  return (
    <Container>
      <div className="mt-20">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* text - left column  */}
          <div className="w-full space-y-[80px] md:w-[65%]">
            <div className="space-y-2">
              <h5 className="text-lg font-semibold">welcome to our E-Bazar</h5>
              <p className="text-justify text-sm">
                Welcome to our E-Bazar Holisticly seize parallel metrics and
                functional ROI.Seamlessly revolutionize error-free internal or
                organic sources before effective scenarios. Progressively
                incentivize state of the art applications for efficient
                intellectual capital. Credibly leverage existing distinctive
                mindshare through cutting-edge schemas. Proactively
                procrastinate team building paradigms coordinate client-centric
                total transparent internal. Dynamically embrace diverse customer
                service and installed base paradigms. Credibly seize
                enterprise-wide experiences for end-to-end data. Professionally
                brand flexible alignments and cost effective architectures.
                Enthusiastically incentivize seamless communities with
                seamlessly facilitate revolutionary metrics with strategic theme
                areas.
              </p>
            </div>
            <div className="mx-auto flex w-[300px] flex-col gap-8 md:w-auto  md:flex-row md:justify-between">
              <div className="space-y-4 rounded-lg  border bg-primary p-6 text-white shadow-sm">
                <h3 className="whitespace-nowrap text-2xl font-bold tracking-tight">
                  9K
                </h3>

                <p className="text-lg font-semibold">Lovely Customer</p>
                <p className="text-sm">
                  Competently Productize virtual models without performance.
                </p>
              </div>
              <div className="space-y-4 rounded-lg  border bg-primary p-6 text-white shadow-sm">
                <h3 className="whitespace-nowrap text-2xl font-bold tracking-tight">
                  9K
                </h3>

                <p className="text-lg font-semibold">Lovely Customer</p>
                <p className="text-sm">
                  Competently Productize virtual models without performance.
                </p>
              </div>
            </div>
          </div>
          {/* images  - right column */}
          <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2  md:max-h-[150px]">
            <Image
              className="rounded-lg object-cover"
              src={bazar1}
              alt="bazar Image 1"
              loading="lazy"
            />
            <Image
              className="rounded-lg object-cover"
              src={bazar2}
              alt="bazar Image 2"
              loading="lazy"
            />
            <Image
              className="rounded-lg object-cover"
              src={bazar3}
              alt="bazar Image 3"
              loading="lazy"
            />
            <Image
              className="rounded-lg object-cover"
              src={bazar4}
              alt="bazar Image 4"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-20 space-y-2">
          <p className="text-justify">
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or organic sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal. Energistically
            reconceptualize global leadership for high-quality networks.
            Credibly restore an expanded array of systems rather than accurate
            results. Collaboratively synergize backend bandwidth without 24/7
            functionalities. Credibly utilize proactive ideas whereas
            cross-media core competencies. Uniquely maximize professional best
            practices through resource maximizing services. Conveniently
            architect cross-unit web services for e-business imperatives.
          </p>
          <p className="text-justify">
            Appropriately visualize market-driven data before one-to-one
            scenarios. Collaboratively productize multifunctional ROI through
            intuitive supply chains. Enthusiastically seize revolutionary value
            and process-centric services. Competently harness intuitive
            information after interoperable markets. Interactively revolutionize
            future-proof value before granular sources. Dynamically embrace
            diverse customer service and installed base paradigms. Credibly
            seize enterprise-wide experiences for end-to-end data.
            Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </p>
        </div>
      </div>
    </Container>
  );
}
