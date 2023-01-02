export interface inFlight {
  airlineNm: string;
  arrAirportNm: string;
  arrPlandTime: string;
  depAirportNm: string;
  depPlandTime: string;
  economyCharge: string;
  prestigeCharge: string;
  vihicleId: string;
}

export interface inTagoApi extends inFlight {
  item: inFlight[];
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
