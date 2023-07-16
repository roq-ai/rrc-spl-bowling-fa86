import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface AuctionInterface {
  id?: string;
  bid: number;
  player_id?: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  _count?: {};
}

export interface AuctionGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
}
