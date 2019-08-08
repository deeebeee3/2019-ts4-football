import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { WinsAnalysis } from './Analyzers/winsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './ReportTargets/HtmlReport';

//create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//create an instance of MatchReader and pass in something satisfying
//the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
