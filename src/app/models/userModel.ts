import { WebcamImage } from "ngx-webcam";

export interface User {
  id:string,
  name:string, 
  passport?:string,
  phone:number,
  img?:WebcamImage,
  age?: number,
  country?: string,
  city?: string,
  graduationYear?: number,
  academicInstitution?: string,
  medicalInstitution?: string,
  residancy?: string,
  department?: string,
  residancyYear?: number,
  token?: String,
  roleNumber:number
 
}