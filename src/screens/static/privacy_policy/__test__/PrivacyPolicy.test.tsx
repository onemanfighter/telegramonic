import { render } from '@testing-library/react';
import PrivacyPolicy from '../PrivacyPolicy';

describe('PrivacyPolicy screen', () => {
  it('should render correctly', () => {
    const { container } = render(<PrivacyPolicy />);

    expect(container).toMatchSnapshot();
  });
});
