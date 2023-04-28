import { Eight } from "./components/EightPart/Eight";
import { Five } from "./components/FifthPart/Five";
import { FirstPart } from "./components/FirstPart/FirstPart";
import { Four } from "./components/FourPart/Four";
import { SecondPart } from "./components/SecondPart/SecondPart";
import { Seven } from "./components/SevenPart/Seven";
import { Six } from "./components/SixPart/Six";
import { ThirdPart } from "./components/ThirdPart/ThirdPart";

export const Landing = () => {
  return (
    <>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
    </>
  );
};
