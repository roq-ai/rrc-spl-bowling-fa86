import axios from 'axios';
import queryString from 'query-string';
import { FantasyGameInterface, FantasyGameGetQueryInterface } from 'interfaces/fantasy-game';
import { GetQueryInterface } from '../../interfaces';

export const getFantasyGames = async (query?: FantasyGameGetQueryInterface) => {
  const response = await axios.get(`/api/fantasy-games${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFantasyGame = async (fantasyGame: FantasyGameInterface) => {
  const response = await axios.post('/api/fantasy-games', fantasyGame);
  return response.data;
};

export const updateFantasyGameById = async (id: string, fantasyGame: FantasyGameInterface) => {
  const response = await axios.put(`/api/fantasy-games/${id}`, fantasyGame);
  return response.data;
};

export const getFantasyGameById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/fantasy-games/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFantasyGameById = async (id: string) => {
  const response = await axios.delete(`/api/fantasy-games/${id}`);
  return response.data;
};
