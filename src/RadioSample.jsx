import { memo } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { textState } from "./store/testState";

export const RadioSample = memo(({ sets }) => {
  const testSample = ["テスト1", "テスト2"];
  const [select, setSelect] = useRecoilState(textState);
  const handleSelect = (e) => {
    setSelect(e.target.value);
    for (var i = 0; i < sets.length; i++) {
      //var targ = Object.keys(sets[i]).toString();
      if (sets[i]["st"] !== "textState" && sets[i]["no"] > 1) {
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
            name="test"
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
