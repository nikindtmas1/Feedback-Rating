import { allServicesData } from '../services/allTherServices';

export function editFeedbackById(id, therName, data){
  return therName === 'One' ?
  allServicesData.goshoDataServices.editGoshoFeedback(id, data).then(() => allServicesData.goshoDataServices.getAll())
  : therName === 'Two' ? allServicesData.toshoDataServices.editToshoFeedback(id, data).then(() => allServicesData.toshoDataServices.getAll())
  : therName === 'Three' ? allServicesData.peshoDataServices.editPeshoFeedback(id, data).then(() => allServicesData.peshoDataServices.getAll())
  : therName === 'Four' ? allServicesData.tomiDataServices.editTomiFeedback(id, data).then(() => allServicesData.tomiDataServices.getAll())
  : therName === 'Five' ? allServicesData.therFiveServices.editTherFiveFeedback(id, data).then(() => allServicesData.therFiveServices.getAll())
  : therName === 'Six' ? allServicesData.therSixServices.editTherSixFeedback(id, data).then(() => allServicesData.therSixServices.getAll())
  : therName === 'Seven' ? allServicesData.therSevenServices.editTherSevFeed(id, data).then(() => allServicesData.therSevenServices.getAll())
  : therName === 'Eight' ? allServicesData.therEightServices.editTherEightFeedback(id, data).then(() => allServicesData.therEightServices.getAll())
  : therName === 'Nine' ? allServicesData.therNineServices.editTherNineFeedback(id, data).then(() => allServicesData.therNineServices.getAll())
  : therName === 'Ten' ? allServicesData.therTenServices.editTherTenFeedback(id, data).then(() => allServicesData.therTenServices.getAll())
  : null
};