import { Component } from '@angular/core';
import { Service } from './service.model';

@Component({
  selector: 'app-services',
  template: `
    <section class="services pt-7 pb-4">
      <div class="container-xl mx-auto px-4">
        <div class="grid grid-cols-4">
          <app-service-card
            [ngClass]="{
              bordered: !isLast
            }"
            *ngFor="let service of services; last as isLast"
            [service]="service"
          ></app-service-card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .bordered {
        position: relative;

        &::before {
          position: absolute;
          content: '';
          right: 0;
          top: -6%;
          width: 1px;
          height: 63px;
          background-color: #e0e0e0;
        }
      }
    `,
  ],
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Free Shipping',
      description: 'Orders over $99',
      icon: 'local_shipping',
    },
    {
      title: '90 Days Return',
      description: 'For any problems',
      icon: 'assignment_return',
    },
    {
      title: 'Secure Payment',
      description: '100% Guarantee',
      icon: 'credit_card',
    },
    {
      title: '24h Support',
      description: 'Dedicated support',
      icon: 'support_agent',
    },
  ];
}
