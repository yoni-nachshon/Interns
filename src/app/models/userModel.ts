import { WebcamImage } from "ngx-webcam";

export interface User {
  id:string,
  name:string, 
  passport:string,
  phone:number,
  img?:WebcamImage

}