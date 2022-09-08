import "./styles.css";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { textState, text2State, text3State } from "./store/testState";
import { RadioSample } from "./RadioSample";
import { RadioSample2 } from "./RadioSample2";
import { RadioSample3 } from "./RadioSample3";
import { useCallback } from "react";

export default function App() {
  const [select1, setSelect1] = useRecoilState(textState);
  const [select2, setSelect2] = useRecoilState(text2State);
  const [select3, setSelect3] = useRecoilState(text3State);

  const handleselect1 = useCallback(() => {
    setSelect1("");
  }, [select1]);
  const handleselect2 = useCallback(() => {
    setSelect2("");
  }, [select2]);

  const handleselect3 = useCallback(() => {
    setSelect3("");
  }, [select3]);
  const sets = [
    { st: "textState", func: handleselect1, no: 1 },
    { st: "text2State", func: handleselect2, no: 2 },
    { st: "text3State", func: handleselect3, no: 3 }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <RadioSample sets={sets} />
      <RadioSample2 sets={sets} />
      <RadioSample3 sets={sets} />
    </div>
  );
}
