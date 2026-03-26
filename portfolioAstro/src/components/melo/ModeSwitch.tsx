type ModeSwitchProps = {
  isStandard: boolean;
  setIsStandard: (isStandard: boolean) => void;
};

export default function ModeSwitch({
  isStandard,
  setIsStandard,
}: ModeSwitchProps) {
  const standardModeSwitch = () => {
    setIsStandard(true);
  };
  const variousModeSwitch = () => {
    setIsStandard(false);
  };
  return (
    <section className="select-menu">
      <div className="select-menu-standard">
        <div className="select-menu-balloon">
          <p>
            1メロディーレーン = 338kg
            <br />
            最小馬体重勝利記録で計算！
          </p>
        </div>
        <button
          type="button"
          className={`select-menu-button ${
            isStandard ? "selected-standard" : ""
          }`}
          aria-pressed={isStandard}
          onClick={standardModeSwitch}
        >
          標準モード
        </button>
      </div>
      <div className="select-menu-various">
        <div className="select-menu-balloon">
          <p>
            標準&うまれたて！
            <br />
            2種類のメロディーレーンと
            <br />
            にんじんで計算！
          </p>
        </div>
        <button
          type="button"
          className={`select-menu-button ${isStandard ? "" : "selected-various"}`}
          aria-pressed={!isStandard}
          onClick={variousModeSwitch}
        >
          いろいろモード
        </button>
      </div>
    </section>
  );
}
