import * as goshoServices from '../services/goshoData';

export function editFeedbackById(id, peopleName, feedback) {
    if(peopleName === 'Gosho'){
        goshoServices.editGoshoFeedback(id, feedback)
        
    }
}