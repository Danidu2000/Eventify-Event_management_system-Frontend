import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-alert-component',
  standalone: true,
  imports: [],
  templateUrl: './toast-alert-component.component.html',
  styleUrl: './toast-alert-component.component.css'
})
export class ToastAlertComponentComponent {
  constructor(public toastService: ToastService) {}
}
