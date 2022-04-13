import React from 'react';
import { IdProvider } from '@radix-ui/react-id';

export const DesignProvider: React.FC = ({ children }) => <IdProvider>{children}</IdProvider>;
