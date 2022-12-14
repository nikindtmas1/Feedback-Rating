import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";
import * as tomiService from '../services/tomiData';


export function addFeedbackByName(data) {
  if (data.peopleName === "Gosho") {
    return goshoService
      .createGoshoFeedback(data)
      .then(() => goshoService.getAll());
  } else if (data.peopleName === "Tosho") {
    return toshoService
      .createToshoFeedback(data)
      .then(() => toshoService.getAll());
  } else if (data.peopleName === "Pesho") {
    return peshoService
      .createPeshoFeedback(data)
      .then(() => peshoService.getAll());
  } else if(data.peopleName === 'Tomi'){
    return tomiService
      .createTomiFeedback(data)
      .then(() => tomiService.getAll());
  }
}
