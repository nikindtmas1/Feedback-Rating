import * as goshoServices from '../services/goshoData';
import * as toshoServices from '../services/toshoData';
import * as peshoServices from '../services/peshoData';


export function editFeedbackById(id, peopleName, data) {
    if(peopleName === 'Gosho'){
      return  goshoServices
        .editGoshoFeedback(id, data)
        .then(() => goshoServices.getAll());
    }else if(peopleName === 'Tosho'){
      return toshoServices
      .editToshoFeedback(id, data)
      .then(() => toshoServices.getAll());
    }else if(peopleName === 'Pesho'){
      return peshoServices
      .editPeshoFeedback(id, data)
      .then(() => peshoServices.getAll());
    }
}