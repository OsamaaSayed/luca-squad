import Link from "next/link";

type JoinDescriptionProps = {
  title: string;
  description: string;
  link: string;
};
const JoinDescription = ({
  title,
  description,
  link,
}: JoinDescriptionProps) => {
  return (
    <div>
      <h3 className="text-[18px] font-bold">{title}</h3>
      <p>{description}</p>
      <Link href={"mailto:"+ link} className="text-[#1882ff]">
        {link}
      </Link>
    </div>
  );
};

export default JoinDescription;
