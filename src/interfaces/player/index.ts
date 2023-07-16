import { AuctionInterface } from 'interfaces/auction';
import { FantasyGameInterface } from 'interfaces/fantasy-game';
import { ScoreInterface } from 'interfaces/score';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  auction?: AuctionInterface[];
  fantasy_game?: FantasyGameInterface[];
  score?: ScoreInterface[];
  user?: UserInterface;
  _count?: {
    auction?: number;
    fantasy_game?: number;
    score?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
