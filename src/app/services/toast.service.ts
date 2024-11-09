import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  triggerAlertWarning(msg: string): void {
    this.showToast('liveToastWarning', msg);
  }

  triggerAlertMessage(msg: string): void {
    this.showToast('liveToastMassage', msg);
  }

  triggerAlertSuccess(msg: string): void {
    this.showToast('liveToastSuccess', msg);
  }

  private showToast(toastId: string, msg: string): void {
    const toastElement = document.getElementById(toastId);
    if (toastElement) {
      toastElement.querySelector('.toast-body')!.innerHTML = msg;
      const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
      toastInstance?.show();
    }
  }
}
