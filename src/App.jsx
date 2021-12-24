import { Link } from "react-router-dom";

export default () => {
  return (
    <div className=" space-y-4">
      <div className="space-y-4 p-4 ">
        <h2 className="text-4xl font-semibold text-center p-10">Assignment</h2>

        <div className="text-center text-xl py-10 font-mono bg-gray-900 text-white">
          <Link to="/page1" className="text-xl text-blue-300">
            Page 1:
          </Link>
          <div className="p-4">
            The UI should have a Slider (range $1000 to $4000). Depending on the
            range I select in the slider, it should display a list of people
            whose Balance is in that range.
          </div>
        </div>


        <div className="text-center text-xl font-mono py-10 bg-gray-900 text-white">
          <Link to="/page2" className="text-xl text-blue-300 ">
            Page 2:
          </Link>
          <div className="p-4">
            Show a list of friends for people who are not active (isActive:
            false) and whose Balance is less than $2000.
          </div>
        </div>

      </div>

      <div className="flex justify-center space-x-6"></div>
    </div>
  );
};
