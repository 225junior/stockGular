import { Injectable } from "@angular/core";


@Injectable()
export class AppStorageServie {

    getItem(key: string): string {
        return window.localStorage[key]
    }
    setItem(key: string, value: string): void {
        window.localStorage[key] = value
    }
    removeToken(key: string): void {
        window.localStorage.removeItem(key)
    }
}