import Image from "next/image";

type jobSummaryFieldProps = {
  imageSource: string;
  title: string;
  value: string;
};
const JobSummaryField = ({
  imageSource,
  title,
  value,
}: jobSummaryFieldProps) => {
  return (
    <div className='mt-8 flex items-center gap-3'>
      <Image
        src={imageSource}
        alt=''
        width={20}
        height={20}
        className='h-5 w-5'
      />
      <div>
        <p className='text-[#7A7A7A]'>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default JobSummaryField;
