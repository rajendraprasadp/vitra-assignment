import people from "./data.json";
import { unformatter } from "./format";

export default () => {
  const filteredPeople = people.filter((p) => {
    return p.isActive == false && unformatter(p.balance) < 2000;
  });

  return (
    <div className="space-y-10 ">
      {filteredPeople.map((p) => {
        return (
          <div key={p._id} className="bg-blue-100 font-mono text-center p-2 space-y-4 w-2/4 mx-auto">
            <div className="flex items-center justify-between bg-blue-200 p-2">
              <div className="text-2xl font-normal text-black">Name</div>
              <div className="text-2xl font-semibold">{p.name}</div>
            </div>

            <div className="flex justify-between items-center bg-blue-900 text-white p-2">
              <div className="text-lg font-semibold  ">Friends</div>
              <div>
                {p.friends.map((f) => {
                  return (
                    <div key={f.id} className=" text-md font-md">
                      {f.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
