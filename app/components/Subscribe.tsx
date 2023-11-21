const Subscribe = () => {
  return (
    <form className="ml-auto flex items-center gap-10">
      <input
        type="text"
        placeholder="ENTER YOUR EMAIL"
        className="border-b-[1px] border-ls-primary bg-transparent py-2 placeholder:text-ls-primary focus:outline-none"
      />

      <button className="bg-ls-primary p-2 uppercase text-white" type="button">
        SUBSCRIBE
      </button>
    </form>
  );
};

export default Subscribe;
