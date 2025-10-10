import conf from "../conf.js";    
import {Client, Account, ID} from "appwrite";

export class AutherService {

    Client = new Client();
    account;

    constructor(){
        this.Client
              .setEndpoint(conf.endpoint)
              .setProject(conf.projectId)
              .setKey(conf.apikey);
    }

}

const authService = new  AutherService();

export default authService

