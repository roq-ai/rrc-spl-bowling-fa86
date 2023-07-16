import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface FantasyGameInterface {
  id?: string;
  name: string;
  player_id?: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  _count?: {};
}

export interface FantasyGameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  player_id?: string;
}
