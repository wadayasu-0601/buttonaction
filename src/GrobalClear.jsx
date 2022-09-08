import { useRecoilValue, useRecoilState } from "recoil";
import { textState, text2State } from "./store/testState";

export const GrobalCrear = (target) => {
  const [select1, setSelect1] = useRecoilState(textState);
  const [select2, setSelect2] = useRecoilState(text2State);

  const handleSelect1 = () => {
    setSelect1("");
  };

  const handleSelect2 = () => {
    setSelect2("");
  };
  // switch (target) {
  //   case "select":
  //     handleSelect1();
  //     break;
  //   case "select2":
  //     handleSelect2();
  //     break;
  //   default:
  //     break;
  // }
};
