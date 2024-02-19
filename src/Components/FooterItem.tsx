import Link from "next/link";

interface PropsType {
    title: string;
    address: string; // Adjusted to use camelCase for consistency
  }
  
  const FooterItem: React.FC<PropsType> = ({ title, address }) => {
    return (
      <Link className="hover:underline delay-150" href={address}>
        <p className="text-[4px] md-text-sm lg:text-sm ">{title}</p>
        
      </Link>
    );
  };
  
  export default FooterItem;
  