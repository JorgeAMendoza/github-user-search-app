import { convertDate } from '../app/utils/convert-date';

describe('Testing Convert Date Function', () => {
  test('2011-01-25T18:44:36Z to Jan 25 2011', () => {
    const testDate = '2011-01-25T18:44:36Z';
    expect(convertDate(testDate)).toBe('25 Jan 2011');
  });

  test('2015-04-16T18:34:10Z to 16 Apr 2016', () => {
    const testDate = '2015-04-16T18:34:10Z';
    expect(convertDate(testDate)).toBe('16 Apr 2015');
  });

  test('2016-05-13T16:53:45Z to 13 May 2016', () => {
    const testDate = '2016-05-13T16:53:45Z';
    expect(convertDate(testDate)).toBe('13 May 2016');
  });
});
