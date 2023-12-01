export const formatujCzas = (sekundy:any) => {
    sekundy = sekundy.toFixed();
    var minuty = Math.floor(sekundy / 60);
    var pozostaleSekundy = sekundy % 60;
    var format =
      minuty.toString() +
      ":" +
      (pozostaleSekundy < 10 ? "0" : "") +
      pozostaleSekundy.toString();
    return format;
  };