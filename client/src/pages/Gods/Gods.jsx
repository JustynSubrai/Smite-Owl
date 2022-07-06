import React, {useState, useEffect} from 'react'
import './Gods.scss'
import Global from '../Global/Global'
import axios from 'axios'
import { authKey, devId } from '../../config';
let config = require('../../config');
let moment = require('moment');
let md5 = require('md5');


function Gods() {
 
  /**
  * Local state
  */
 const [date] = useState(moment.utc().format('YYYYMMDDhhmmss'));
 const [gods, setGods] = useState({});
 

 /**
  * @description generates session url
  * @returns String
  */
 const generateSessionUrl = () => {
     const signature = md5(`${config.devId}createsession${config.authKey}${date}`);
     return `https://api.smitegame.com/smiteapi.svc/createsessionjson/${config.devId}/${signature}/${date}`;
 };


 /**
  * Wrap axios with async method
  */
 const init = async () => {
     await axios.get(generateSessionUrl())
         .then(({ data }) => data)
         .then(async ({ session_id }) => {
             const godSignature = md5(`${config.devId}getgods${config.authKey}${date}`);
             await axios.get(`https://api.smitegame.com/smiteapi.svc/getgodsjson/${config.devId}/${godSignature}/${session_id}/${date}/1`)
                 .then((data) => {
                     setGods(data);
                 })
                 .catch((error) => console.error(error));
         })
         .catch((error) => console.error(error));
 };


 /**
  * Onload
  */
 useEffect(() => {
     init();
 }, []);

  return (
    <div>
      <Global />
      this is gods
    </div>
  )
}

export default Gods
