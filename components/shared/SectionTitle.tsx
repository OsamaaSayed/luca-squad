import Image from "next/image";

type SectionTitleProps = {
  primaryText: string;
  secondaryText: string;
};

const SectionTitle = ({ primaryText, secondaryText }: SectionTitleProps) => {
  return (
    <div className="border-l-2 border-ls-primary max-w-[400px] mx-auto lg:mx-0">
      <div className="flex flex-col gap-4 py-2.5 ps-6">
        <p className="text-3xl uppercase">
          <span className="font-normal">{primaryText}</span>{" "}
          <span className="font-bold">{secondaryText}</span>
        </p>
        <Image src="/svg/arrow.svg" width={50} height={83} alt="arrow" />
      </div>
    </div>
  );
};

export default SectionTitle;
