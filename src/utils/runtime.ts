export const convertRuntimeIntoHoursAndMinutes = (runtime: number) => {
  const hour = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hour}h ${minutes}m`;
};
