export const minutsToSeconds = (minuts: number): number =>
    Math.floor(minuts * 60);

const date = new Date(Date.now() + 1123213); // number in sec
export const oneHour = 1000 * 60 * 60;
export const thirtyMinuts = oneHour / 2;
export const fiveMinuts = 5 * 60;
export const oneDay = oneHour * 24;
