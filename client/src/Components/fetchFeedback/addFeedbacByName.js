import { allServicesData } from "../services/allTherServices";

export function addFeedbackByName(data, therName){

  const name = therName;
  return name === 'One' ? 
  allServicesData.goshoDataServices.createGoshoFeedback(data).then(() => allServicesData.goshoDataServices.getAll())
  : name === 'Two' ? allServicesData.toshoDataServices.createToshoFeedback(data).then(() => allServicesData.toshoDataServices.getAll())
  : name === 'Three' ? allServicesData.peshoDataServices.createPeshoFeedback(data).then(() => allServicesData.peshoDataServices.getAll())
  : name === 'Four' ? allServicesData.tomiDataServices.createTomiFeedback(data).then(() => allServicesData.tomiDataServices.getAll())
  : name === 'Five' ? allServicesData.therFiveServices.createTherFiveFeedback(data).then(() => allServicesData.therFiveServices.getAll())
  : name === 'Six' ? allServicesData.therSixServices.createTherSixFeedback(data).then(() => allServicesData.therSixServices.getAll())
  : name === 'Seven' ? allServicesData.therSevenServices.createTherSevFeed(data).then(() => allServicesData.therSevenServices.getAll())
  : name === 'Eight' ? allServicesData.therEightServices.createTherEightFeedback(data).then(() => allServicesData.therEightServices.getAll())
  : name === 'Nine' ? allServicesData.therNineServices.createTherNineFeedback(data).then(() => allServicesData.therNineServices.getAll())
  : name === 'Ten' ? allServicesData.therTenServices.createTherTenFeedback(data).then(() => allServicesData.therTenServices.getAll())
  : null
};