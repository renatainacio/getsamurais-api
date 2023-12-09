import coreJoi from 'joi';
import joiCpf from 'joi-cpf-cnpj';

const Joi = coreJoi.extend(joiCpf);

const userSchema = Joi.object({
  fullName: Joi.string().required(),
  image: Joi.string().allow('').optional(),
  gender: Joi.string().valid('male', 'female', 'non-binary', 'agender', '').optional(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  cpf: Joi.document().cpf().required(),
  phone: Joi.string()
    .regex(/^\(\d{2}\)\d{5}-\d{4}$/)
    .required(),
  city: Joi.string().required(),
  state: Joi.string()
    .required()
    .valid(
      'AC',
      'AL',
      'AM',
      'AP',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MG',
      'MS',
      'MT',
      'PA',
      'PB',
      'PE',
      'PI',
      'PR',
      'RJ',
      'RN',
      'RO',
      'RR',
      'RS',
      'SC',
      'SE',
      'SP',
      'TO',
    ),
  password: Joi.string()
    .required()
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,30}$/),
});

export default userSchema;
