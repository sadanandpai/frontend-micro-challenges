import { EDifficulty, IChallenge, OptionType } from '../types';
import { IGetChallengesByid } from '../types/challenge';

const difficultyOrder = [EDifficulty.Easy, EDifficulty.Medium, EDifficulty.Hard];

export function sortChallengesByDifficulty(challenges: Map<string, IChallenge>) {
  return new Map(
    [...challenges.entries()].sort((a, b) => {
      const difficultyOrderA = difficultyOrder.indexOf(a[1].difficulty);
      const difficultyOrderB = difficultyOrder.indexOf(b[1].difficulty);
      return difficultyOrderA - difficultyOrderB;
    })
  );
}

export function filterChallengeByKey<T extends keyof IChallenge, K extends IChallenge[T]>(
  challenges: IChallenge[],
  key: T,
  value: K,
  caseInsensitive: boolean = true
): IChallenge[] {
  return challenges.filter((item) => {
    const itemValue = item[key];
    // Special handling for tags & contributors
    if ((key === 'tags' || key === 'contributors') && Array.isArray(itemValue)) {
      const tags: string[] = itemValue;
      if (Array.isArray(value)) {
        return (value as string[]).some((val) => {
          const searchValue = caseInsensitive ? val.toLowerCase() : val;
          return tags.some((tag) =>
            caseInsensitive ? tag.toLowerCase().includes(searchValue) : tag.includes(val)
          );
        });
      }
    }

    // Handling for strings with case insensitivity
    else if (typeof itemValue === 'string' && typeof value === 'string') {
      if (caseInsensitive) {
        return itemValue.toLowerCase().includes((value as unknown as string).toLowerCase());
      }
      return itemValue.includes(value as unknown as string);
    }

    // Default equality check for other types
    return itemValue === value;
  });
}

export function getChallengesByContributors(challenges: IChallenge[], contributors: OptionType[]) {
  if (!contributors || contributors.length === 0) {
    return challenges;
  }
  const contributorIds = contributors.map((contributor) => contributor.value);
  let data = challenges.filter((challenge) => contributorIds.includes(challenge.developer));
  return data;
}

export function getChallengesByTitle(challenges: IChallenge[], title: string) {
  if (!title || title.length === 0) {
    return challenges;
  }
  let data = challenges.filter((challenge) => {
    return challenge?.title.toLowerCase().includes(title.toLowerCase());
  });
  return data;
}

export function getChallengesByDifficulties(challenges: IChallenge[], difficulties: OptionType[]) {
  if (!difficulties || difficulties.length === 0) return challenges;
  const difficultyValues = difficulties.map((difficulty) => difficulty.value);
  return challenges.filter((challenge) => difficultyValues.includes(challenge.difficulty));
}
export function getChallengesByNewChallenge(challenges: IChallenge[], newChallenge: boolean) {
  if (!newChallenge) return challenges;
  return challenges.filter(({ isNew }) => isNew);
}

export function getChallengesByid({
  challenges,
  title,
  contributors,
  difficulties,
  newChallenge,
}: IGetChallengesByid) {
  if (
    (!title || title.length === 0) &&
    (!contributors || contributors.length === 0) &&
    (!difficulties || difficulties.length === 0) &&
    !newChallenge
  ) {
    return challenges;
  }

  let filteredChallenges = getChallengesByTitle(challenges, title);

  filteredChallenges = getChallengesByContributors(filteredChallenges, contributors);

  filteredChallenges = getChallengesByDifficulties(filteredChallenges, difficulties);

  filteredChallenges = getChallengesByNewChallenge(filteredChallenges, newChallenge);
  return filteredChallenges;
}
