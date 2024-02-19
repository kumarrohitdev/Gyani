import HomeCenter from "@/Components/HomeCenter";
import HomeHeader from "@/Components/HomeHeader";
import InputBox from "@/Components/InputBox";

export default function page() {
  return (
    <>
      <header>
        <HomeHeader />
        <HomeCenter  />
        <InputBox />
      </header>
    </>
  )
}
