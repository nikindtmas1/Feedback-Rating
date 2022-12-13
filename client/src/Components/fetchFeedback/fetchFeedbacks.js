import * as service from "../services/data";
import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";

export function fetchByName(name) {
  if (name === "Gosho") {
    return goshoService.getAll();
  } else if (name === "Tosho") {
    return toshoService.getAll();
  } else if (name === "Pesho") {
    return peshoService.getAll();
  } else if (name === "Tomi") {
  } else if (name === "start") {
    return service.getAll();
  }
}
