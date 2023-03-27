import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  let pipe: EllipsisPipe;

  beforeEach(() => {
    pipe = new EllipsisPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an instance and transform in error', () => {
    let shouldGoHere = false;
    try {
      pipe.transform(12);
    } catch (err) {
      shouldGoHere = true;
    }
    expect(shouldGoHere).toBe(true);
  });

  it('create an instance and transform in ellipse', () => {
    const result = pipe.transform('abcde', 3);
    expect(result).toBe('abc...');
  });

  it('create an instance and return identity', () => {
    const result = pipe.transform('abcde', 10);
    expect(result).toBe('abcde');
  });
});
