import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";

const Consolidations = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  return (
    <div className="bg-white p-5 rounded-[15px] consolidations">
      <div className="text-[20px] text-center font-bold">Channel Detection</div>
      <div className="w-[90%] m-auto pt-5">
        <table className="w-full">
          <thead>
            <tr>
              <td>Channel</td>
              <td>Strength</td>
              <td>Breakout</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consolidation</td>
              <td>0.843</td>
              <td className="flex items-center justify-evenly">
                0.8
                <BsFillArrowUpCircleFill
                  color="green"
                  size={width > 768 ? 20 : 12}
                />
                <BsFillArrowDownCircleFill
                  color="#c30101"
                  size={width > 768 ? 20 : 12}
                />{" "}
                0.2
              </td>
            </tr>
            <tr>
              <td>Structure</td>
              <td>0</td>
              <td className="flex items-center justify-evenly">
                0.7
                <BsFillArrowUpCircleFill
                  color="green"
                  size={width > 768 ? 20 : 12}
                />
                <BsFillArrowDownCircleFill
                  color="#c30101"
                  size={width > 768 ? 20 : 12}
                />{" "}
                0.3
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consolidations;
