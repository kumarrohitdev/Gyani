import HomeImage from "./HomeImage";
import SearchBox from "./SearchBox";

export default function HomeCenter() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div>
        <HomeImage />
        <SearchBox />
      </div>
    </div>
  );
}
