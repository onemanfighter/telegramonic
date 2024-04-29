import { render } from '@testing-library/react';
import AlertComponent from '../Alert';

describe('Alert', () => {
  it('should render correctly', () => {
    const { container } = render(
      <AlertComponent title="title" description="description" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with status', () => {
    const { container } = render(
      <AlertComponent title="title" description="description" status="error" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with variant', () => {
    const { container } = render(
      <AlertComponent
        title="title"
        description="description"
        variant="solid"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly without icon', () => {
    const { container } = render(
      <AlertComponent
        title="title"
        description="description"
        showIcon={false}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with status and variant', () => {
    const { container } = render(
      <AlertComponent
        title="title"
        description="description"
        status="error"
        variant="solid"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with all props', () => {
    const { container } = render(
      <AlertComponent
        title="title"
        description="description"
        status="error"
        variant="solid"
        showIcon={false}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with loading status', () => {
    const { container } = render(
      <AlertComponent
        title="title"
        description="description"
        status="loading"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
