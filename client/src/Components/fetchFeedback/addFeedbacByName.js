import * as goshoService from '../services/goshoData';
import * as toshoService from '../services/toshoData';
import * as peshoService from '../services/peshoData';


export function addFeedbackByName(data) {
    
    if(data.peopleName === 'Gosho'){
      return goshoService.createGoshoFeedback(data)
      .then(() => goshoService.getAll())
    };
}