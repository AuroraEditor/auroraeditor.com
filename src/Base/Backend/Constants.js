export const baseApiURL = "http://api.auroraeditor.com:8081/v1/"

// Auth Endpoints
export const login = "oauth/login"
export const register = "oauth/register"
export const verifyAccount = "oauth/email-verification"

// Marketplace Endpoints
export const extensions = "extensions"
export const extensionFindCategory = "extensions/category?category="
export const extensionFindTag = "extensions/tag?tag="
export const extensionFindID = "extensions/id?extensionId="
export const deleteExtension = "extensions/delete?extensionId="
export const createExtension = "extensions/create"
