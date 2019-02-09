interface FieldProps {
  type: string;
  value: string;
  name?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => any;
  placeholder: string;
  disabled: boolean;
}

export { FieldProps };
