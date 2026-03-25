import imgMeloStd from "../../images/melo/MelodyLaneStd.png";
import imgMeloVarious from "../../images/melo/MelodyLaneVarious.png";
import type { VariousResultType } from "./MeloApp";

type ResultProps = {
  isStandard: boolean;
  standardResult: number;
  variousResult: VariousResultType | undefined;
};

export default function Result({
  isStandard,
  standardResult,
  variousResult,
}: ResultProps) {
  if (!variousResult) return null;

  return isStandard ? (
    <StandardSum standardResult={standardResult} />
  ) : (
    <VariousSum variousResult={variousResult} />
  );
}

type StandardSumProps = {
  standardResult: number;
};

const StandardSum = ({ standardResult }: StandardSumProps) => {
  return (
    <div className="result-standard result-common" id="result">
      <div>
        <img src={imgMeloStd.src} alt="手を挙げるメロディーレーン" />
      </div>
      <div>
        <p>{standardResult}メロディーレーンです！</p>
      </div>
    </div>
  );
};

type VariousSumProps = {
  variousResult: VariousResultType;
};

const VariousSum = ({ variousResult }: VariousSumProps) => {
  return (
    <div className="result-various result-common" id="result">
      <div>
        <img
          src={imgMeloVarious.src}
          alt="メロディーレーンと生まれたてのメロディーレーンとにんじん"
        />
      </div>
      <div>
        <p>
          {variousResult.variousResult}メロディーレーン
          <br />
          {variousResult.variousResultBB}うまれたてのメロディーレーン
          <br />
          そしてにんじん{variousResult.variousResultCarrot}本です！
        </p>
      </div>
    </div>
  );
};
