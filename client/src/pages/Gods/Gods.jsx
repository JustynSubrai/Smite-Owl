import React from 'react'
import './Gods.scss'
import Global from '../Global/Global'
import axios from 'axios'
import { authKey, devId } from '../../config';
let config = require('../../config');
let moment = require('moment');
let md5 = require('md5');


function Gods() {

  // let setDate = moment.utc().format('YYYYMMDDhhmmss');

  // //sessionHash
  // function sessionHash() {
  //   let encodedVal = md5(devId + "createsession" + authKey + setDate);
  //   return encodedVal;
    
  // };
  // console.log(setDate)
  
  // // let sessionSignature = sessionHash();
  
  // // let createSession = 'https://api.smitegame.com/smiteapi.svc/createsessionjson/' + devId + '/' + sessionSignature + '/' + setDate;
  // // // console.log(createSession);
  let createSession = 'https://jsonplaceholder.typicode.com/todos/1'
  axios.get(createSession)
    .then(({data})=> console.log(data))
    .catch((err)=> console.error(err))
  // let sessionFetch = fetch(createSession)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     return data.session_id;
  //   })

    // let session_id = sessionFetch;

  // function getSession() {
  //   let encodedVal = md5(session_id)
  //   return encodedVal;
  // }

  // let session = getSession();

  // //god hash
  // function godHash() {
  //   let encodedVal = md5(devId + "getgods" + authKey + setDate);
  //   return encodedVal;

  // };

  // let godSignature = godHash();

  // let getGodsUrl = 'https://api.smitegame.com/smiteapi.svc/getgodsjson/' + devId + '/' + godSignature + '/' + session + '/' + setDate + '/1';


  // console.log(getGodsUrl);

  return (
    <div>
      <Global />
      this is gods
    </div>
  )
}

export default Gods
