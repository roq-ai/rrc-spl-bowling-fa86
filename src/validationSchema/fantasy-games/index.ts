import * as yup from 'yup';

export const fantasyGameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  player_id: yup.string().nullable(),
});
