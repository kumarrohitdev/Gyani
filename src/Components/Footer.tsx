import FooterItem from "./FooterItem";
import UserCountry from "./UserCountry";

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-screen pl-8  pb-6 pt-4 pr-4 text-sm bg-gray-100">
      <div className="border-b-[2px]">
      <UserCountry />
      </div>
      
      <div className="flex justify-between pt-3 ">
      <div className="flex gap-4">
       <FooterItem title="About"  address="/about"/>
       <FooterItem title="Advertising"  address="/about"/>
       <FooterItem title="Business"  address="/about"/>
       <FooterItem title="How Search Works"  address="/about" />

      </div>
      <div className="flex gap-4">
       <FooterItem title="Privacy"  address="/about"/>
       <FooterItem title="Terms"  address="/about" />
       <FooterItem title="Settings"  address="/about" />
      </div>
      </div>
    </div>
  );
}
