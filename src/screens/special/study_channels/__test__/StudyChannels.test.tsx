import { render } from '@testing-library/react';
import StudyChannels from '../StudyChannels';

describe('StudyChannels screen', () => {
  it('should render correctly', () => {
    const { container } = render(<StudyChannels />);

    expect(container).toMatchSnapshot();
  });
});
