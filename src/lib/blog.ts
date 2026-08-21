const FRENCH_MONTHS: Record<string, number> = {
  janvier: 0,
  fevrier: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  aout: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  decembre: 11,
};

const normalizeDatePart = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export const getBlogPostTimestamp = (date: string) => {
  const normalizedDate = normalizeDatePart(date);
  const match = normalizedDate.match(/(\d{1,2})\s+([a-z]+),?\s+(\d{4})/);

  if (!match) {
    const fallbackTimestamp = Date.parse(date);
    return Number.isNaN(fallbackTimestamp) ? 0 : fallbackTimestamp;
  }

  const [, day, month, year] = match;
  const monthIndex = FRENCH_MONTHS[month];

  if (monthIndex === undefined) {
    return 0;
  }

  return new Date(Number(year), monthIndex, Number(day)).getTime();
};

export const compareBlogPostsByDateDesc = <
  BlogPost extends { date: string; id: number },
>(
  firstPost: BlogPost,
  secondPost: BlogPost,
) => {
  const dateDifference =
    getBlogPostTimestamp(secondPost.date) - getBlogPostTimestamp(firstPost.date);

  return dateDifference || secondPost.id - firstPost.id;
};
