import getClick from './getClick';

describe('getClick', () => {
  it('dispatch click', () => {
    document.body.dispatchEvent = jest.fn();

    getClick();

    expect(document.body.dispatchEvent).toHaveBeenCalledWith(
      expect.any(MouseEvent)
    );
  });

  it('not dispatch click', () => {
    document.body.dispatchEvent = jest.fn();

    expect(document.body.dispatchEvent).not.toHaveBeenCalled();
  });
});
