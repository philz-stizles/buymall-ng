import { Component, Input } from '@angular/core';
import { Service } from './service.model';

@Component({
  selector: 'app-service-card',
  template: `
    <div class="service-card">
      <div class="flex-row justify-center wrap">
        <div class="mr-5">
          <span class="material-symbols-outlined text-5xl">
            {{ service.icon }}
          </span>
        </div>
        <div class="">
          <h3 class="text-md font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-sm">{{ service.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .service-card {
        position: relative;

        .wrap {
          margin-bottom: 30px;

          span {
            color: #999999;
            font-weight: 400;
          }

          p {
            line-height: 24px;
            color: #666;
          }
        }
      }
    `,
  ],
})
export class ServiceCardComponent {
  @Input() service!: Service;
}
