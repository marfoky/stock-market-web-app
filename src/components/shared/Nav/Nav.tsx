import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Nav = () => {
  return (
    <div className="relative h-[50px] z-50">
      <div className="bg-red px-32 py-3 flex justify-between items-center w-full fixed bg-white">
        <div className="flex-1 text-2xl font-bold text-green-900">
          <i>
            <Link to={"/"}>FXVAI</Link>
          </i>
        </div>
        <div className="flex justify-between items-center flex-1">
          <div className="flex">
            <div className="pr-7">
              <Link to={"/models"}>Models</Link>
            </div>
            <div className="pr-7">
              <Link to={"/models/learn"}>Learn Our Models</Link>
            </div>
          </div>
          {/* <div>
            <Button
              text="Get started"
              styles="text-red-500 text-500 font-semibold"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
