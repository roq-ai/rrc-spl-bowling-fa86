import * as yup from 'yup';

export const scoreValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  player_id: yup.string().nullable(),
});
