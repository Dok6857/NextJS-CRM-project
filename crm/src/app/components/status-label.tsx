import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return <span className={`py-1 px-3.5 rounded-3xl text-sm font-medium ${
    status === Status.Active && 'text-green-700 bg-green-100' ||
    status === Status.NotActive && 'text-green-700 bg-green-100' ||
    status === Status.Pending && 'text-green-700 bg-green-100' ||
    status === Status.Suspended && 'text-green-700 bg-green-100'
  }`}>{children}</span>;
}
