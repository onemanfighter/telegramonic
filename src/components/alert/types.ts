export type AlertComponentProps = {
  title: string;
  description: string;
  showIcon?: boolean;
  status?: 'error' | 'success' | 'warning' | 'info' | 'loading' | undefined;
  variant?: 'solid' | 'subtle' | 'left-accent' | 'top-accent';
};
