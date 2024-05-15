import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

import { Container, ErrorMessage, Input, Label, TextArea } from './styles';

interface IFormFieldProps {
  title: string;
  name: string;
  control: Control<any>;

  error?: FieldError;
  isTextArea?: boolean;
}

export default function FormField({
  title,
  control,
  name,
  error,
  isTextArea,
}: IFormFieldProps) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, ...rest } }) => (
          <>
            <Label htmlFor={name}>{title}</Label>
            {isTextArea ? (
              <TextArea id={name} isWrong={!!error} name={name} {...rest} />
            ) : (
              <Input id={name} isWrong={!!error} name={name} {...rest} />
            )}
            {error && <ErrorMessage>*{error.message}</ErrorMessage>}
          </>
        )}
      ></Controller>
    </Container>
  );
}
