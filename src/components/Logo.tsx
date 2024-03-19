import Image from "next/image";
import valorantLogo from "../assets/valorantLogoRed.svg";
import Link from "next/link";

interface Props {
  customClasses: string;
}

const Logo = ({ customClasses }: Props) => {
  return (
    <Link href="/" className={`${customClasses}`}>
      <Image
        src={valorantLogo}
        alt="logo valorant"
        width={48}
        height={48}
        className="lg:hidden"
      />
      <Image
        src={valorantLogo}
        alt="logo valorant"
        width={64}
        height={64}
        className="hidden lg:inline-block"
      />
    </Link>
  );
};

export default Logo;
