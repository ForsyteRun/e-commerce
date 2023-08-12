import getNavLinkButtonStyles from './getNavLinkButtonStyles';

test('Get active style', () => {
  const props = {
    isActive: true,
  };
  expect(getNavLinkButtonStyles(props)).toBe('button_active');
});

test('Get not active style', () => {
  const props = {
    isActive: false,
  };
  expect(getNavLinkButtonStyles(props)).toBe('button');
});
