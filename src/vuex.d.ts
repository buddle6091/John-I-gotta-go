import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    shortDep: string;
    isActive: boolean;
    depPlandTime: string;
    depAirportNm: string;
    arrAirportNm: string;
    selectClass: string;
    totalPerson: number;
    departure: string;
    arrival: string;
    airlineNm: string;
    airport_dep: string;
    airport_arr: string;
    depAirportId: string;
    arrAirportId: string;
    shortArr: string;
    shortDep: string;
    /* temporary data for reverse departure to arrival */
    tem_short: string;
    tem_airport: string;
    tem_code: string;
    /* to ticketBox */
    d_placeholder: string;
    a_placeholder: string;
    tem_depNm: string;
    tem_arrNm: string;
    depNm: string;
    arrNm: string;
    tem_DepArrNm: string;
    depTime: array[];
    depMin: array[];
    arrTime: array[];
    arrMin: array[];
    exMonth: string;
    exDate: function;
    exTime: string;
    pageNo: number;
    picked_from: function;
    tickets: array[];
    totalCount: number;
    loading: boolean;
    noTicket: boolean;
  }

  interface apiRequest {
    serviceKey: String;
    numOfRows: Number;
    pageNo: Number;
    _type: String;
    depAirportId: String;
    arrAirportId: String;
    depPlandTime: String | Number;
    airlineId: String;
  }

  interface apiResponse {
    resultCode?: String | Number;
    resultMsg?: String;
    numOfRows?: Number;
    pageNo?: Number;
    totalCount?: Number;
    vihicleId: String;
    airlineNm: String;
    depPlandTime: String | Number;
    ㄴ;
    arrPlandTime: String | Number;
    economyCharge?: Number;
    prestigeCharge?: Number;
    depAirportNm: String;
    arrAirportNm: String;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<Store>;
  }
}
