import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [ToastAlertComponentComponent],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {
  constructor(private router: Router, private eventService: EventService, private cartService: CartService,private toastService: ToastService) { }
  ngOnInit(): void {
    this.loadTickets();
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  public standerdTicketPrice: any;
  public vipTicketPrice: any;
  public allAccessTicketPrice: any;

  loadTickets() {
    const id = this.eventService.getEventId(); // Get the eventId from the shared service
    if (id) {
      fetch(`http://localhost:8080/ticket/get-list-by-event_id/${id}`)
        .then(response => response.json())
        .then(data => {
          const tickets = Array.isArray(data) ? data : data.tickets; // Adjust if data is wrapped in an object

          if (Array.isArray(tickets)) {
            tickets.forEach(ticket => {
              switch (ticket.status) {
                case 'standard':
                  this.standerdTicketPrice = ticket.price;
                  break;
                case 'vip':
                  this.vipTicketPrice = ticket.price;
                  break;
                case 'all-access':
                  this.allAccessTicketPrice = ticket.price;
                  break;
              }
            });
          } else {
            console.error('Invalid ticket data format');
          }
        })
        .catch(error => console.error('Error loading tickets:', error));
    } else {
      console.error('Event ID not set.');
    }
  }

  addToCart(ticketType: string, price: number) {
    this.cartService.addTicket({ type: ticketType, price: price });
    this.toastService.triggerAlertSuccess('Ticket added to cart');
  }

}
