export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

/*Utility types are so useful in typescript

The Pick utility type allows us to choose which fields of an existing type we want to use.
So in order to return the DiaryEntry without the 'comment' field, we can do this
const getNonSensitiveEntries = (): Pick<DiaryEntry,  'id' | 'date' | 'weather' | 'visibility'>[] => {}

But since we are only trying to remove the 'comment' field, we can do so with the Omit utility type
const getNonSensitiveEntries = ():  Omit<DiaryEntry, 'comment'>[] 

https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys

we can also create a new type using the Pick or Omit utility types
type NonSensitiveDiaryEntry  = Omit<DiaryEntry, 'comment'>;
*/
export type NonSensitiveDiaryEntry  = Omit<DiaryEntry, 'comment'>;
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;