type JobType = "Writer" | "Director" | "Acting" | "Writing" | "Directing";

export const getNamesByRole = (credits: MovieCredits, role: JobType) => {
  console.log(credits);

  const filteredNames = credits
    .filter((person) => person.known_for_department === role)
    .map(({ name }) => name);

  const firstFiveNames = filteredNames.slice(0, 5);

  return firstFiveNames;
};
