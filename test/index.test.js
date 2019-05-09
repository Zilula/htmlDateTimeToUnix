import getUnixTime from '../src/index';

describe('tests default getUnixTime fn', () => {
  it('calls function', () => {
    const date = '2019-05-29';
    const time = '12:03';
    const result = getUnixTime(date, time);
    expect(result).toEqual(1559156580000);
  });

  it('errors when date is not passed as a string', () => {
    const date = 20190529;
    const time = '12:03';
    expect(() => getUnixTime(date, time)).toThrowError('NaN both date and time must be strings');
  });

  it('errors when time is not passed as a string', () => {
    const date = '2019-05-29';
    const time = 1203;
    expect(() => getUnixTime(date, time)).toThrowError('NaN both date and time must be strings');
  });
});
