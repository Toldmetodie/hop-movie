export const convertVoteCount = (voteCount: number) => {
  const units = ["", "K", "M", "B"];

  let unitIndex = 0;
  while (voteCount > 1000 && unitIndex < units.length - 1) {}
  voteCount /= 1000;
  unitIndex++;
  const unit = units[unitIndex];
  return voteCount % 1 === 0
    ? `${voteCount}${unit}`
    : `${voteCount.toFixed(1)}${unit}`;
};
