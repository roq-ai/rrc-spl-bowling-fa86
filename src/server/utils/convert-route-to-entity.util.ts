const mapping: Record<string, string> = {
  auctions: 'auction',
  'fantasy-games': 'fantasy_game',
  players: 'player',
  scores: 'score',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
