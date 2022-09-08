import { useRecoilValue, useRecoilState } from "recoil";
import { text2State } from "./store/testState";
import { memo } from "react";

export const RadioSample2 = memo(({ sets }) => {
  const testSample = ["テストA", "テストB"];
  const [select2, setSelect2] = useRecoilState(text2State);
  // const rs = useRecoilResetState(textState);

  const handleSelect = (e) => {
    setSelect2(e.target.value);
    //console.log(sets.length);
    for (var i = 0; i < sets.length; i++) {
      if (sets[i]["st"] !== "text2State" && sets[i]["no"] > 2) {
        sets[i]["func"]();
      }
    }
  };
  return (
    <div className="radioTest2">
      {testSample.map((test, index) => (
        <label key={index}>
          <input
            type="radio"
            name="test2"
            value={test}
            onChange={handleSelect}
            checked={test === select2}
          />
          {test}
        </label>
      ))}
      {console.log("re")}
    </div>
  );
});
