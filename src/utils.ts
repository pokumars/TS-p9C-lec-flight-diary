import { NewDiaryEntry, Visibility, Weather } from './types';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  };

  return newEntry;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment');
  }
  return comment;
};

//This uses type predicate a.k.a type guard
//The general form of a type predicate is 'parameterName is Type' where the parameterName is the name of the function parameter and Type is the targeted type.
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if(!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseWeather = (weather: unknown): Weather => {

  if(!weather || !isWeather(weather)) {
    throw new Error('Incorrect or missing weather: ' + weather);
  }

  return weather;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any) : param is Weather => {
  return Object.values(Weather).includes(param);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isVisibility = (param: any): param is Visibility => {
  return Object.values(Visibility).includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
      throw new Error('Incorrect or missing visibility: ' + visibility);
  }
  return visibility;
};


export default toNewDiaryEntry;