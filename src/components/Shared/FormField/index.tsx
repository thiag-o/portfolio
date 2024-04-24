import React from 'react';

import { Container, Input, Label, TextArea } from './styles';

interface IFormFieldProps {
  title: string;
  name: string;
  isTextArea?: boolean;
}

export default function FormField({
  title,
  name,
  isTextArea,
}: IFormFieldProps) {
  return (
    <Container>
      <Label htmlFor={name}>{title}</Label>
      {isTextArea ? (
        <TextArea id={name} name={name} />
      ) : (
        <Input id={name} name={name} />
      )}
    </Container>
  );
}
