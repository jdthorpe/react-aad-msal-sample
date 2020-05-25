import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { LogLevel, Logger } from "msal";
// Configuration object constructed.

const logger = new Logger(
    (logLevel, message, containsPii) => {
        console.log("[MSAL]", message);
    },
    {
        level: LogLevel.Verbose,
        piiLoggingEnabled: false,
    }
);

console.log("window.location.origin:", window.location.origin);
// The auth provider should be a singleton. Best practice is to only have it ever instantiated once.
// Avoid creating an instance inside the component it will be recreated on each render.
// If two providers are created on the same page it will cause authentication errors.
export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority:
                "https://login.microsoftonline.com/<< your tenant Id here >>",
            clientId: "<< your configured appr registratoin clieint id here >>", //
            postLogoutRedirectUri: window.location.origin,
            redirectUri: window.location.origin,
            validateAuthority: true,

            // After being redirected to the "redirectUri" page, should user
            // be redirected back to the Url where their login originated from?
            navigateToLoginRequestUrl: false,
        },
        // Enable logging of MSAL events for easier troubleshooting.
        // This should be disabled in production builds.
        system: {
            logger: logger as any,
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: true,
        },
    },
    {
        scopes: ["openid"],
    },
    {
        loginType: LoginType.Redirect,
        // When a token is refreshed it will be done by loading a page in an iframe.
        // Rather than reloading the same page, we can point to an empty html file which will prevent
        // site resources from being loaded twice.
        tokenRefreshUri: window.location.origin + "/auth.html",
    }
);
