import { useState } from "react";
import people from "./data.json";
import Slider from "./Slider/index";
import { unformatter, formatter } from "./format";

export default () => {
  const [minRange, setMinRange] = useState(1000);
  const [maxRange, setMaxRange] = useState(4000);

  const filteredPeople = people.filter((p) => {
    return (
      unformatter(p.balance) >= minRange && unformatter(p.balance) <= maxRange
    );
  });

  return (
    <div className="container mx-auto max-w-2xl">
      <div className="sticky top-0 my-2 p-4 bg-black text-white rounded-lg">
        <Slider
          min={1000}
          max={4000}
          onChange={({ min, max }) => {
            setMinRange(min);
            setMaxRange(max);
          }}
        />
        <div className="space-y-2">
          <div>Min Balance: {formatter.format(minRange)} </div>
          <div>Max Balance: {formatter.format(maxRange)} </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {filteredPeople.map((p) => {
          return (
            <div
              key={p._id}
              className="bg-blue-500 text-white shadow-lg  p-4 rounded-lg space-y-2 "
            >
              <div className="text-xl font-md pb-1">{p.name}</div>
              <div className="text-sm">{p.phone}</div>
              <div className="text-sm">{p.email}</div>
              <div className="text-md font-semibold">{p.balance}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
