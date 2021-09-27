import diaries from '../../data/diaries';

import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';


const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry =>  {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
   ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

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

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
/*TypeScript only checks whether we have all of the required fields or not, but excess fields
are not prohibited so we may have to manually remove the excess fields so we dont expose
sensitive data to the browser*/
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById= (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  return entry;
};


export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById
};
