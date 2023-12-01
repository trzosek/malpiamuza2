export default function PlayingAnimation() {
  return (
    <div className="playing bg-opacity-10 bg-white w-8 h-8 rounded-md flex justify-between items-end p-2 box-border">
      <div className="playing__bar playing__bar1 h-3/5"></div>
      <div className="playing__bar playing__bar2 h-3/10 animation-up-and-down animation-delay-2"></div>
      <div className="playing__bar playing__bar3 h-3/4 animation-up-and-down animation-delay-3"></div>
    </div>
  );
}
