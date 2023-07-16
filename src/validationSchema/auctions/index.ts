import * as yup from 'yup';

export const auctionValidationSchema = yup.object().shape({
  bid: yup.number().integer().required(),
  player_id: yup.string().nullable(),
});
