import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface ScoreInterface {
  id?: string;
  score: number;
  player_id?: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  _count?: {};
}

export interface ScoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
}
