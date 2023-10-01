import { ComponentPropsWithoutRef } from 'react';

export default function Tab({
  children,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  return <button {...props}>{children}</button>;
}
