import * as service from "../services/data";

import { allServicesData } from "../services/allTherServices";

export function fetchByName(name){
  return name === 'One' ? allServicesData.goshoDataServices.getAll()
  : name === 'Two' ? allServicesData.toshoDataServices.getAll()
  : name === 'Three' ? allServicesData.peshoDataServices.getAll()
  : name === 'Four' ? allServicesData.tomiDataServices.getAll()
  : name === 'Five' ? allServicesData.therFiveServices.getAll()
  : name === 'Six' ? allServicesData.therSixServices.getAll()
  : name === 'Seven' ? allServicesData.therSevenServices.getAll()
  : name === 'Eight' ? allServicesData.therEightServices.getAll()
  : name === 'Nine' ? allServicesData.therNineServices.getAll()
  : name === 'Ten' ? allServicesData.therTenServices.getAll()
  :  service.getAll()
};