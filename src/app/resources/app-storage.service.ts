import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AppStorageService {
    static getUser(): any {
        throw new Error('Method not implemented.');
    }

    getToken(): string {
        let token = sessionStorage.getItem('AUTH-TOKEN');
        return (token != null && token != undefined && token.trim() != '') ? token : undefined
    }

    setToken(value: string): boolean {
        if (!value || value == undefined || value.trim() == '')
            return false;


        sessionStorage.removeItem('AUTH-TOKEN');
        sessionStorage.setItem('AUTH-TOKEN', value);
        return true;
    }

    existsToken(): boolean {
        let token = sessionStorage.getItem('AUTH-TOKEN');

        return token != null && token != undefined && token.trim() != ''
    }

    removeToken(): void {
        sessionStorage.removeItem('AUTH-TOKEN');
    }



    setLocalStoragePageCurrent(page): void {
        sessionStorage.setItem('PAGE_CURRENT', page);
    }

    getLocalStoragePageCurrent(): any {
        return sessionStorage.getItem('PAGE_CURRENT');
    }

    removeLocalStoragePageCurrent(page): void {
        sessionStorage.removeItem('PAGE_CURRENT');
    }


    // setGUID(value): void {
    //     this.removeGUID();
    //     localStorage.setItem('GUIID', value);
    // }

    // getGUID(): any {
    //     return localStorage.getItem('GUIID');
    // }

    // removeGUID(): void {
    //     localStorage.removeItem('GUIID');
    // }

    setLocalStorageIndexElementPageSelected(page): void {
        sessionStorage.setItem('ELEMENT', page);
    }

    getLocalStorageIndexElementPageSelected(): any {
        return sessionStorage.getItem('ELEMENT');
    }

    removeLocalStorageIndexElementPageSelected(page): void {
        sessionStorage.removeItem('ELEMENT');
    }

    getLocalStorageIndexElementPageCurrentSelected(page): any {
        let pageIndex = 0;
        if (this.getLocalStoragePageCurrent() == page) {
            pageIndex = !isNaN(Number(sessionStorage.getItem('ELEMENT'))) ? Number(sessionStorage.getItem('ELEMENT')) : 0;
        }
        return pageIndex;
    }

    getTabServiceBreadcrumb(): string {
        return sessionStorage.getItem('tabServiceBreadcrumb');
    }



    getHttpOptions(options: any, serviceId?: any): any {
        if (options) {
            return options;
        }

        // let headersConfig = {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Headers': 'Content-Type',
        //     'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS,DELETE,PUT',
        //     'Authorization':'hgYsSrRNbgHxjrlMzGnsRRx4FjvqE6od-kHiedAyWn-7T0W3Jw5Q8IiuOroGBk20kBTEBGnm4-maKDF9Ap4NPA',
        //     // 'Authorization':'hgYsSrRNbgHxjrlMzGnsRRx4FjvqE6od-kHiedAyWn-7T0W3Jw5Q8IiuOroGBk20kBTEBGnm4-maKDF9Ap4NPA'
        // };

        let headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if (serviceId) {
            headersConfig = this.addServiceHeader(serviceId, headersConfig);
        }


        return {
            headers: new HttpHeaders(headersConfig),
        };
    }



    getHttpOptionsFormData(options?: any, serviceId?: any): any {
        if (options) {
            return options;
        }

        let headersConfig = {

        };

        if (serviceId) {
            headersConfig = this.addServiceHeader(serviceId, headersConfig);
        }

        return {
            headers: new HttpHeaders(headersConfig),
        };
    }



    addServiceHeader(serviceId: number, headersConfig?: any): any {
        if (serviceId > 0)
            headersConfig['Service'] = serviceId.toString();

        return headersConfig;
    }

}
