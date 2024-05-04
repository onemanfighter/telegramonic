export type DrawerProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  onModalClose: () => void;
};
