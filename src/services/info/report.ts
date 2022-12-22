import axios from "axios";
import { ReportModel } from "../../model/report_model";
import { reportUrl } from "../url";

export const get = async (perPage: number, page: number) => {
    let response: any = await axios.get(`${reportUrl}?page=${page}&perPage=${perPage}`);
    let rawReports : any[] = response.data.reports
    let reports : ReportModel[] = []
    for(let i = 0; i < rawReports.length; i++){
        const report : ReportModel = {
            id: rawReports[i]._id,
            userName: rawReports[i].userName,
            phoneNumber: rawReports[i].phoneNumber,
            email: rawReports[i].email,
            address: rawReports[i].address,
            description: rawReports[i].description
        }
        reports.push(report)
    }
    return reports
}

export const getLength = async (perPage: number) => {
    let response: any = await axios.get(`${reportUrl}/getLength`);
    let total = response.data.length / perPage
    return Math.round(total as number)    
}

export const create = async (userName: string,  description: string,  email: string, phoneNumber?: string, address?:string ) => {
   let res = await axios.post(`${reportUrl}`, {userName, description, email, phoneNumber, address}) 
   const code = res.data.code as number
   if(code === 200){
        return res.data.code
   } else {
    return null
   }
}