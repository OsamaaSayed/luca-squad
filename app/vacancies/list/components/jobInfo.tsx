import React from 'react';

type Props = {
  title: string;
  description: string;
  image: string;
};

const JobInfo: React.FC<Props> = (props) => {
  return (
    <div className='mt-8 flex items-center gap-3'>
      <img
        src={props.image}
        alt=''
        className='h-5 w-5'
      />
      <div>
        <p className='text-[#7A7A7A]'>Location</p>
        <p>790 FOLSOM AVE, MILANO</p>
      </div>
    </div>
  );
};

export default JobInfo;
