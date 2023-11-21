import Image from "next/image";

const Article = () => {
  return (
    <div className="flex flex-1 flex-col gap-6 bg-white p-8 text-ls-primary ">
      <p className="text-3xl font-bold capitalize">
        We are happy to answer all your <br />
        questions and discuss your <br />
        construction needs.
      </p>
      <p className="text-sm normal-case">
        Do not hesitate to contact us for requests for quotes, consultations or
        for more information about our expertise and services. We will be ready
        to assist you.
      </p>
      <Image
        src="/images/contact/customer-service.jpg"
        width={548}
        height={228}
        alt="customer service"
        className="w-full"
      />
    </div>
  );
};
export default Article;
