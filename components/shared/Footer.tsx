import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between p-10 md:p-24 sm:flex-row">
      <div className="font-medium">
        <Image
          src="/images/footer/footer-logo.png"
          width={158}
          height={177}
          alt="logo"
          className="mb-6"
        />

        <p>Via della Guastalla, 11-20122 Milano</p>
        <p>+39 3779522376</p>
        <p>info@Lucasquad.it</p>
      </div>
      <div className="mt-5 flex gap-4 sm:mt-auto">
        <Link href="/">
          <Image
            src="/svg/social/facebook.svg"
            width={35}
            height={35}
            alt="facebook icon"
          />
        </Link>

        <Link href="/">
          <Image
            src={"/svg/social/instagram.svg"}
            width={35}
            height={35}
            alt="logo"
          />
        </Link>

        <Link href="/">
          <Image
            src="/svg/social/twitter.svg"
            width={35}
            height={35}
            alt="logo"
          />
        </Link>

        <Link href="/">
          <Image
            src="/svg/social/linkedin.svg"
            width={35}
            height={35}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
