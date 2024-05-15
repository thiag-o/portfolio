import { z } from 'zod';

export const resolver = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório.' })
    .min(1, 'Nome é obrigatório.'),
  email: z
    .string({ required_error: 'Email é obrigatório.' })
    .email('Digite um email válido.')
    .min(1, 'Email é obrigatório.'),
  subject: z
    .string({ required_error: 'Assunto é obrigatório.' })
    .min(1, 'Assunto é obrigatório.'),
});
