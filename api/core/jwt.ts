import { Injectable } from "@angular/core";
import { AppStorageServie } from "./app-storage-service";

@Injectable()
export class Jwt {
    tokenKey = 'jwt';
    constructor(private storageService: AppStorageServie) { }

    getToken(): string {
        return this.storageService.getItem(this.tokenKey)
    }

    registerToken(tokenValue: string): void {
        this.storageService.setItem(this.tokenKey, tokenValue)
    }

    removeToken(): void {
        this.storageService.removeToken(this.tokenKey)
    }
}