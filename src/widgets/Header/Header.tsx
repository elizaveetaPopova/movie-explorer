import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 mx-auto p-4 text-gray-50">
      <div className="flex gap-8 items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="dark:invert"
            width={150}
            height={0}
            style={{ height: 'auto' }}
            priority
          />
        </Link>
        <Link href="/favorites">favorites</Link>
      </div>
    </header>
  );
};

export default Header;
