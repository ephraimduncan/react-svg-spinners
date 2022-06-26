export function stringDurationToFloat(dur: string | number): number {
  if (typeof dur === "string") {
    if (dur.slice(-1).toLocaleLowerCase() === "s") {
      return parseFloat(dur.slice(0, -1));
    } else {
      return parseFloat(dur);
    }
  } else {
    return dur;
  }
}
