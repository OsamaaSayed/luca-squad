import Image from "next/image";

import { Item } from "@/types/global";

type ContactBoxProps = {
  item: Item;
};

const ContactBox = ({ item }: ContactBoxProps) => {
  return (
    <div className="flex items-center w-[250px]">
      <div className="p-4">
        <Image src={item.url} alt="icon" width={36} height={36} />
      </div>

      <div className="border-l-2 border-ls-primary p-3">
        <h4 className="text-lg font-semibold uppercase">{item.title}</h4>
        <p>{item.body}</p>
      </div>
    </div>
  );
};

export default ContactBox;
