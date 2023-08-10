import getNavLinkButtonStyles from './getNavLinkButtonStyles';

test('Getting active styles', () => {
  const props = {
    isActive: true,
  };
  expect(getNavLinkButtonStyles(props)).toBe('button button_active');
});

test('Getting not active styles', () => {
  const props = {
    isActive: false,
  };
  expect(getNavLinkButtonStyles(props)).toBe('button');
});
