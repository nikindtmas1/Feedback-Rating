import { allServicesData } from '../services/allTherServices';

export function deleteFeedbackByName(id, therName, feedback){
   return therName === 'One' ?
   allServicesData.goshoDataServices.deleteGoshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Two' ? allServicesData.toshoDataServices.deleteToshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Three' ? allServicesData.peshoDataServices.deletePeshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Four' ? allServicesData.tomiDataServices.deleteTomiFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Five' ? allServicesData.therFiveServices.deleteTherFeveFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Six' ? allServicesData.therSixServices.deleteTherSixFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Seven' ? allServicesData.therSevenServices.deleteTherSevFeed(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Eight' ? allServicesData.therEightServices.deleteTherEightFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Nine' ? allServicesData.therNineServices.deleteTherNineFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Ten' ? allServicesData.therTenServices.deleteTherTenFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : null
}