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
import { AdminSettingPageComponent } from './settingPage/admin-setting-page/admin-setting-page.component';
import { UserSettingComponent } from './settingPage/user-setting/user-setting.component';
import { AllEventSettingComponent } from './settingPage/all-event-setting/all-event-setting.component';
import { AllReviewsSettingComponent } from './settingPage/all-reviews-setting/all-reviews-setting.component';
import { PaymentViewComponent } from './settingPage/payment-view/payment-view.component';
import { ForgotPasswordComponent } from './forgotPasswordPage/forgot-password/forgot-password.component';
import { UpdatePasswordFormComponent } from './forgotPasswordPage/updatePassword/update-password-form/update-password-form.component';

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
    {path:"admin-settings",component: AdminSettingPageComponent},
    {path:"user-settings",component: UserSettingComponent},
    {path:"all-events-settings",component: AllEventSettingComponent},
    {path:"all-reviews-settings",component: AllReviewsSettingComponent},
    {path:"view-sales",component: PaymentViewComponent},
    {path:"forgot-password",component: ForgotPasswordComponent},
    {path:"update-password",component: UpdatePasswordFormComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
