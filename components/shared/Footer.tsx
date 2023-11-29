import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='container mx-auto mb-24 flex flex-col justify-between sm:flex-row'>
      <div className='font-medium'>
        <Link href='/'>
          <Image
            src='/svg/footer-logo.svg'
            width={158}
            height={177}
            alt='logo'
            className='mb-6'
          />
        </Link>

        <a
          className='hover:underline'
          href='https://goo.gl/maps/jqTi2D8nR9XeXRk1A'
          target='_blank'
        >
          Via della Guastalla, 11-20122 Milano (Mi)
        </a>
        <a
          className='block hover:underline'
          href='tel:+390297134070'
        >
          +39 0297134070
        </a>
        <a
          className='block hover:underline'
          href='mailto:info@lucasquad.it'
        >
          info@lucasquad.it
        </a>
      </div>
      {/* <div className='mt-5 flex gap-4 sm:mt-auto'>
        <Link href='/'>
          <Image
            src='/svg/social/facebook.svg'
            width={35}
            height={35}
            alt='facebook icon'
          />
        </Link>

        <Link href='/'>
          <Image
            src={'/svg/social/instagram.svg'}
            width={35}
            height={35}
            alt='logo'
          />
        </Link>

        <Link href='/'>
          <Image
            src='/svg/social/twitter.svg'
            width={35}
            height={35}
            alt='logo'
          />
        </Link>

        <Link href='/'>
          <Image
            src='/svg/social/linkedin.svg'
            width={35}
            height={35}
            alt='logo'
          />
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
