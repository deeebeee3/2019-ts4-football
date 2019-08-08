import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

//pulling out the first element of the first match which will be a date
//hovering over dateOfFirstMatch, type inference will kick in and correctly annotate it as being of type Date
const dateOfFirstMatch = reader.data[0][0];

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
