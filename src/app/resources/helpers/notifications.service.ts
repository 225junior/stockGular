import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {

    constructor(private toastr: ToastrService) { }

    showSuccess(message: string, title: string): void {
        this.toastr.success(title, message);
    }

    showError(message: string, title: string): void {
        this.toastr.error(title, message);
    }

    showInfo(message: string, title: string): void {
        this.toastr.info(title, message);
    }
}
