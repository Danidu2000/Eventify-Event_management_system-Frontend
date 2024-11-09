import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signupPage/signup-form/signup-form.component';
import { LoginFormComponent } from './loginPage/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { EventComponentComponent } from './eventPage/event-component/event-component.component';
import { EventFormComponent } from './eventPage/event-form/event-form.component';
import { HomeComponent } from './commenPage/home/home.component';
import { EventInputComponent } from './eventPage/event-input/event-input/event-input.component';
import { SettingPageComponent } from './settingPage/setting-page/setting-page.component';
import { ProfileSettingFormComponent } from './settingPage/profile-setting-form/profile-setting-form.component';
import { EventSettingFormComponent } from './settingPage/event-setting-form/event-setting-form.component';
import { TicketFormComponent } from './ticketPage/ticket-form/ticket-form.component';
import { PaymentComponent } from './paymentPage/payment/payment.component';
import { CartPageComponent } from './cartPage/cart-page.component';
import { ReviewViewComponent } from './reviewPage/review-view/review-view.component';
import { InputReviewComponent } from './reviewPage/input-review/input-review.component';
import { ReviewSettingFormComponent } from './settingPage/review-setting-form/review-setting-form/review-setting-form.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"signup", component: SignupFormComponent},
    {path:"login",component: LoginFormComponent},
    {path:"home",component: HomeComponent},
    {path:"event",component: EventFormComponent},
    {path:"event-input",component: EventInputComponent},
    {path:"settings",component: SettingPageComponent},
    {path:"profile-settings",component: ProfileSettingFormComponent},
    {path:"event-settings",component: EventSettingFormComponent},
    {path:"tickets",component: TicketFormComponent},
    {path:"cart",component: CartPageComponent},
    {path:"payment",component: PaymentComponent},
    {path:"reviews",component: ReviewViewComponent},
    {path:"review-input",component: InputReviewComponent},
    {path:"review-settings",component: ReviewSettingFormComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
