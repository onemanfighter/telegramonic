import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { AlertComponentProps } from './types';

const AlertComponent = ({
  title,
  description,
  status = 'info',
  variant = 'subtle',
  showIcon = true,
}: AlertComponentProps) => (
  <Alert status={status} variant={variant}>
    {showIcon && <AlertIcon />}
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{description}</AlertDescription>
  </Alert>
);

export default AlertComponent;
