import { memo } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { text3State } from "./store/testState";

export const RadioSample3 = memo(({ sets }) => {
  const testSample = ["テストC", "テストD"];
  const [select, setSelect] = useRecoilState(text3State);
  const handleSelect = (e) => {
    setSelect(e.target.value);
    for (var i = 0; i < sets.length; i++) {
      //var targ = Object.keys(sets[i]).toString();
      if (sets[i]["st"] !== "text3State" && sets[i]["no"] > 3) {
        sets[i]["func"]();
      }
    }
  };
  return (
    <div className="radioTest">
      {testSample.map((test, index) => (
        <label key={index}>
          <input
            type="radio"
            name="test3"
            value={test}
            onChange={handleSelect}
            checked={select === test}
          />
          {test}
        </label>
      ))}
    </div>
  );
});
