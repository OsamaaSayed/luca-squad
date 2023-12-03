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
      <h3 className='text-[18px] font-bold'>{title}</h3>
      <p>{description}</p>
      <a
        href={'mailto:' + link}
        className='text-[#1882ff] hover:underline'
      >
        {link}
      </a>
    </div>
  );
};

export default JoinDescription;
