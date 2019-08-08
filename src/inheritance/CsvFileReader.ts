import fs from 'fs';

export abstract class CsvFileReader<T> {
  // an array of arrays, and those inner arrays have a
  // Date, string, string, number, number, MatchResult, string
  data: T[] = [];

  constructor(public filename: string) {}

  //method stub that the child class
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      )
      .map(this.mapRow);
  }
}
