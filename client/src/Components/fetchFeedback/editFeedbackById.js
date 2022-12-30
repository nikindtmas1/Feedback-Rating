import * as goshoServices from '../services/goshoData';

export function editFeedbackById(id, peopleName, data) {
    if(peopleName === 'Gosho'){
      return  goshoServices
        .editGoshoFeedback(id, data)
        .then(() => goshoServices.getAll())
    }
}