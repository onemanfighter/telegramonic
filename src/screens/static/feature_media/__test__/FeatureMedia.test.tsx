import { render } from '@testing-library/react';
import FeatureMedia from '../FeatureMedia';

describe('FeatureMedia screen', () => {
  it('should render correctly', () => {
    const { container } = render(<FeatureMedia />);

    expect(container).toMatchSnapshot();
  });
});
