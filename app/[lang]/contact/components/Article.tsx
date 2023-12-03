import Image from 'next/image';

const Article = () => {
  return (
    <>
      <div className='flex flex-1 flex-col gap-6 bg-white p-8 text-ls-primary '>
        <p className='text-3xl font-bold capitalize'>
          We are happy to answer all your questions and discuss <br /> your
          construction needs.
        </p>
        <p className='text-sm normal-case'>
          Do not hesitate to contact us for requests for quotes, consultations
          or for more information about our expertise and services. We will be
          ready to assist you.
        </p>
      </div>
      <Image
        src='/images/contact/customer-service.jpg'
        width={548}
        height={201}
        alt='customer service'
        className='h-40 w-full object-cover sm:h-52'
      />
    </>
  );
};
export default Article;
