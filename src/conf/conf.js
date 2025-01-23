const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_ProductId: String(import.meta.env.VITE_PROJECT_ID),
    appwrite_DatabseId: String(import.meta.env.VITE_DATABASE_ID),
    appwrite_CollectionaId: String(import.meta.env.VITE_COLLECTION_ID)

}

export default conf