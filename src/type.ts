export interface search {
  inactiveHeight: String;
  picked_from: Date;
  picked_to: String;
  toggle: Boolean;
  person: Number[];
  selectClass: String;
  openModal: Boolean;
  btnActive: Boolean;
  DepartureDate: String;
  ArrivalDate: String;
  airplane_img_inactive: object;
  airplane_img_active: object;

  /* datePicker Elements */
  selected: null;
  from: null;
  to: null;
  yearSelected: null;
  monthSelected: null;
}

export interface apiRequest {
  serviceKey: String;
  numOfRows: Number;
  pageNo: Number;
  _type: String;
  depAirportId: String;
  arrAirportId: String;
  depPlandTime: String | Number;
  airlineId: String;
}

export interface apiResponse {
  resultCode?: String | Number;
  resultMsg?: String;
  numOfRows?: Number;
  pageNo?: Number;
  totalCount?: Number;
  vihicleId: String;
  airlineNm: String;
  depPlandTime: String | Number;
  arrPlandTime: String | Number;
  economyCharge?: Number;
  prestigeCharge?: Number;
  depAirportNm: String;
  arrAirportNm: String;
}
