import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';

export function addFeedbackByName(data){
  const name = data.peopleName;
  return name === 'Gosho' ? 
  goshoService.createGoshoFeedback(data).then(() => goshoService.getAll())
  : name === 'Tosho' ? toshoService.createToshoFeedback(data).then(() => toshoService.getAll())
  : name === 'Pesho' ? peshoService.createPeshoFeedback(data).then(() => peshoService.getAll())
  : name === 'Tomi' ? tomiService.createTomiFeedback(data).then(() => tomiService.getAll())
  : name === 'Five' ? therFiveService.createTherFiveFeedback(data).then(() => therFiveService.getAll())
  : null
}