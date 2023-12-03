import React from 'react';
type Props = {
  title: string;
  location: string;
};
const JobComponent: React.FC<Props> = (props) => {
  return (
    <div className='mt-5 flex flex-col justify-between bg-white p-10 md:flex-row'>
      <div>
        <h1 className='text-2xl text-black'>{props.title}</h1>
        <p className='text[#7A7A7A] text-lg'>{props.location}</p>
      </div>
      <button className='bg-main bg-ls-primary  py-1 text-lg text-white md:px-10'>
        Discover Now
      </button>
    </div>
  );
};

export default JobComponent;
