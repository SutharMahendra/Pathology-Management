import { use } from "react";
import conf from "../conf/conf";
import { Client, ID, Account } from 'appwrite'

export class Authentication {

    client = new Client()
    account;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwrite_ProductId)
        this.account = new Account(this.client)

    }

    // it's for creating account of user 
    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (userAccount) {
                return this.login({ email, password })
            }

        } catch (error) {
            console.log('error at creating account:', error)
        }

    }

    // login section
    async login({ email, password }) {
        try {
            const userLogin = await this.account.createEmailPasswordSession(
                email,
                password
            )
            if (userLogin) {
                return userLogin;
            }

        } catch (error) {
            console.log('error at login creation:', error)
            return false;
        }
    }

    // current user section

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get()
            if (currentUser) {
                return currentUser
            }
        } catch (error) {
            console.log('error at getCurrentUser:', error)
            return false
        }
    }

    // logout section

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log('error at logout:', error)
        }
    }
}

const authService = new Authentication();


export default authService;