import getUnixTime from '../src/index';


describe('tests default getUnixTime fn', () => {
  const date = '2019-05-29';
  const time = '12:03';
  it('calls function', () => {
    const result = getUnixTime(date, time);
    expect(result).toEqual(1559156580000);
  });
});
