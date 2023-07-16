import axios from 'axios';
import queryString from 'query-string';
import { AuctionInterface, AuctionGetQueryInterface } from 'interfaces/auction';
import { GetQueryInterface } from '../../interfaces';

export const getAuctions = async (query?: AuctionGetQueryInterface) => {
  const response = await axios.get(`/api/auctions${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAuction = async (auction: AuctionInterface) => {
  const response = await axios.post('/api/auctions', auction);
  return response.data;
};

export const updateAuctionById = async (id: string, auction: AuctionInterface) => {
  const response = await axios.put(`/api/auctions/${id}`, auction);
  return response.data;
};

export const getAuctionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/auctions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAuctionById = async (id: string) => {
  const response = await axios.delete(`/api/auctions/${id}`);
  return response.data;
};
