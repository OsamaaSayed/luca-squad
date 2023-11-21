import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import JoinDescription from "./JoinDescription";

const JoinSection = () => {
  return (
    <section className="flex flex-col justify-center gap-12 px-10 pt-14 md:px-24 xl:flex-row ">
      <div className="flex flex-col gap-8">
        <SectionTitle primaryText="join" secondaryText="us" />
        <JoinDescription
          title="if you are a motivated professional"
          description="in the construction industry, Luca Squad is the perfect place for you. We offer a dynamic and challenging work environment where you can showcase your skills and grow your career. We are looking for talented individuals who share our passion for excellence and precision and who want to contribute meaningfully to high-profile construction projects. If you are interested in joining a team committed to delivering extraordinary projects and exceeding expectations, please send us your resume and cover letter to"
          link="info@lucasquad.it"
        />
        <JoinDescription
          title="investments and collaborations"
          description="if you are interested in investing in innovative construction projects or would like to partner with us to develop new opportunities in the construction industry, we are open to exploring new partnerships and initiatives. Luca Squad is committed to establishing strong and lasting relationships with investors and companies that share our vision of excellence and quality in the construction industry. If you are interested in discussing potential investment or collaboration opportunities, please contact us directly at "
          link="info@lucasquad.it"
        />
      </div>
      <Image
        src="/images/vacancies/join.jpg"
        width={591}
        height={652}
        alt="join us"
        // className="w-[591px] sm:h-[652px]"
      />
    </section>
  );
};

export default JoinSection;
