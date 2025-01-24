import conf from "../conf/conf";
import { Client, ID, Databases } from "appwrite";

export class Database {

    client = new Client()
    database;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwrite_ProductId)
        this.database = new Databases(this.client)
    }

    // create document 

    async createDocument({ slug, product, mfgDate, expDate, productId, quantity, price, category, description }) {
        try {
            const document = await this.database.createDocument(
                conf.appwrite_DatabseId,
                conf.appwrite_CollectionaId,
                slug,
                {
                    product,
                    mfgDate,
                    expDate,
                    productId,
                    quantity,
                    price,
                    category,
                    description
                }
            )
            if (document) {
                return document
            }

        } catch (error) {
            console.log('error at create document:', error)

        }
    }

    // update document section
    async updateDocument({ slug, product, quantity, price, description }) {
        try {
            return await this.database.updateDocument(
                conf.appwrite_DatabseId,
                conf.appwrite_CollectionaId,
                slug,
                {
                    product,
                    quantity,
                    price,
                    description
                }
            )
        } catch (error) {
            console.log('error at update document:', error)
            return false
        }
    }

    // delete document section 

    async deleteDocument(slug) {
        try {
            return await this.database.deleteDocument(
                conf.appwrite_DatabseId,
                conf.appwrite_CollectionaId,
                slug
            )

        } catch (error) {
            console.log("error at delete document:", error)
        }
    }

    // get any one document

    async getDoc(slug) {
        try {
            return await this.database.getDocument(
                conf.appwrite_DatabseId,
                conf.appwrite_CollectionaId,
                slug
            )
        } catch (error) {
            console.log('error at get doc :', error)
        }
    }

    // list of all document

    async listDocuments() {
        try {
            return await this.database.listDocuments(
                conf.appwrite_DatabseId,
                conf.appwrite_CollectionaId,
                []
            )

        } catch (error) {
            console.log('error at getting list of document:', error)
        }
    }

}