import fs from 'fs';

export class CsvFileReader {
  data: string[][] = []; //2 dmiensional array of strings

  constructor(public filename: string) {}

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
      );
  }
}
