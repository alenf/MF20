import { UserManager, UserManagerSettings, UserProfile } from 'oidc-client-ts'
export default class AuthService {

    manager: UserManager
    currentUser: UserProfile | undefined

    constructor() {

        const userman: UserManagerSettings = {
            authority: "",
            client_id: "",
            redirect_uri: ""
        }

        this.manager = new UserManager(userman);
        this.currentUser = {
            name: "",
            sub: "",
            iss: "",
            aud: "",
            iat: 0,
            exp: 0
        }
    }

}