import titleImg from "../../images/melo/HowManyMelodyLaneTitleImage.svg";
import titleImgMelo from "../../images/melo/MelodyLaneTitle.png";

export default function Title() {
  return (
    <header className="title">
      <h1 className="fall-in-title">
        <img
          src={titleImg.src}
          alt="それって何メロディーレーン？"
          className="title-image"
        />
      </h1>
      <div className="title-illust">
        <img
          src={titleImgMelo.src}
          alt="降ってくるメロディーレーン"
          className="fall-in-illust"
        />
      </div>
    </header>
  );
}
