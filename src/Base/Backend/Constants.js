export const baseApiURL = "http://api.auroraeditor.com:8081/v1/"

// Auth Endpoints
export const login = "oauth/login"
export const register = "oauth/register"
export const logout = "oauth/logout"
export const verifyAccount = "oauth/verify"
export const sendEmailVerification = "oauth/verify/send-email"

// Profile Endpoints
export const account = "user/me"

// Marketplace Endpoints
export const extensions = "extensions"
export const extensionFindCategory = "extensions/category?category="
export const extensionFindTag = "extensions/tag?tag="
export const extensionFindID = "extensions/id?extensionId="
export const deleteExtension = "extensions/delete?extensionId="
export const createExtension = "extensions/create"
