import Image from "next/image";

type ContactMethodProps = {
    icon: string;
    text: string;
  };
  const ContactMethod = ({ icon, text }: ContactMethodProps) => {
    return (
      <div className="flex items-center gap-2.5 font-medium">
        <Image src={icon} width={18} height={18} alt={icon} />
        <span>{text}</span>
      </div>
    );
  };

  export default ContactMethod;