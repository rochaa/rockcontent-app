import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { TokenStorageService } from './token-storage.service';

export abstract class BaseService {
    public TokenStorageService = new TokenStorageService();

    protected GetHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected GetAuthHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.TokenStorageService.getToken()}`
            })
        };
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];
        let customResponse = { error: { errors: [] } }

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("An unknown error has occurred");
                response.error.errors = customError;
            }
        }
        if (response.status === 500) {
            customError.push("A processing error occurred, please try again later or contact our support.");
            return throwError(customResponse);
        }

        console.error(response);
        return throwError(response);
    }
}