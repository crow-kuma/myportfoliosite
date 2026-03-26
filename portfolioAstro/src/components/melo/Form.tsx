import type { VariousResultType } from './MeloApp';
import { useEffect } from 'react';

type FormProps = {
  weight: number;
  weightName: string;
  setWeight: (weight: number) => void;
  setWeightName: (weightName: string) => void;
  isResultOpen: boolean;
  setIsResultOpen: (isOpen: boolean) => void;
  setStandardResult: (standardResult: number) => void;
  setVariousResult: (variousResult: VariousResultType) => void;
};

export default function Form({
  weight,
  weightName,
  setWeight,
  setWeightName,
  isResultOpen,
  setIsResultOpen,
  setStandardResult,
  setVariousResult,
}: FormProps) {
  const MELO_WEIGHT: number = 338;
  const MELO_BB_WEIGHT: number = 20;
  const CARROT_WEIGHT: number = 0.2;

  const standardResult: number = Math.round((weight / MELO_WEIGHT) * 100) / 100;
  const variousResult: number = Math.floor(weight / MELO_WEIGHT);
  const variousResultBB: number = Math.floor(
    (weight % MELO_WEIGHT) / MELO_BB_WEIGHT
  );
  const variousResultCarrot: number = Math.round(
    ((weight % MELO_WEIGHT) % MELO_BB_WEIGHT) / CARROT_WEIGHT
  );

  useEffect(() => {
    if (!isResultOpen) {
      setWeight(0);
      setWeightName('');
    }
  }, [isResultOpen, setWeight, setWeightName]);

  const handleSum = () => {
    setIsResultOpen(true);
    setStandardResult(standardResult);
    setVariousResult({
      variousResult,
      variousResultBB,
      variousResultCarrot,
    });
  };

  useEffect(() => {
    if (!isResultOpen) return;
    const el = document.getElementById('result');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isResultOpen]);

  return (
    <section className="main">
      <div className="main-input">
        <div className="main-input-box">
          <label htmlFor="inputWeight" className="main-inputWeight">
            おもさ
          </label>
          <input
            type="number"
            id="inputWeight"
            name="weight"
            placeholder="重さを書いてね！"
            onChange={(e) => {
              const nextWeight: number = e.target.valueAsNumber;
              setWeight(Number.isNaN(nextWeight) ? 0 : nextWeight);
            }}
            value={weight === 0 ? '' : weight}
          />
        </div>
        <div className="main-input-box">
          <label htmlFor="inputWeightName" className="main-inputWeightName">
            なまえ
          </label>
          <input
            type="text"
            id="inputWeightName"
            name="weightName"
            placeholder="名前を書いてね！"
            onChange={(e) => setWeightName(e.target.value)}
            value={weightName}
          />
        </div>
      </div>
      <div className="main-summary">
        <p>{weight === 0 ? '？？？' : weight}kgの</p>
        <p>{weightName === '' ? '？？？' : weightName}は…</p>
      </div>
      <button type="button" className="main-button" onClick={handleSum}>
        何メロディーレーン？
      </button>
    </section>
  );
}
