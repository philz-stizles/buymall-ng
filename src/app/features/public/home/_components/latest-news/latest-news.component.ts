import { Component } from '@angular/core';
import { Blog } from '../../../../../core/models/blog.model';

@Component({
  selector: 'app-latest-news',
  template: `
    <section class="latest-news bg-gray-3 pt-10 pb-10">
      <div class="container-xl mx-auto px-4">
        <div class="flex-row justify-between wrap mb-6">
          <div class="section-title">
            <h2 class="text-2xl font-semibold">The Latest News</h2>
          </div>
          <div class="flex-row item-center more">
            <a class="text-sm" href="blog.html">View All News </a
            ><span class="material-symbols-outlined">
              keyboard_arrow_right
            </span>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <app-blog-card
            *ngFor="let article of latestNews"
            [blog]="article"
          ></app-blog-card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .latest-news {
        background-color: #f9f9f9;

        .section-title h2 {
          margin: 0;
          letter-spacing: -0.25px;
        }

        .more {
          a,
          span {
            display: inline-block;
            color: #666666;
          }
        }
      }
    `,
  ],
})
export class LatestNewsComponent {
  latestNews: Blog[] = [
    {
      title: "Five things you only know if you’re at Chanel's Hamburg Show",
      category: 'News',
      imageUrl: 'assets/images/lukas-292999.jpg',
      createdAt: 'May 25, 2024',
    },
    {
      title: 'Basic colored mixed - trending 2020',
      category: 'Inspiration',
      imageUrl: 'assets/images/shoes-and-legs.jpg',
      createdAt: 'February 14, 2024',
    },
    {
      title: 'Calvin Klein Shoes Collection 2020, Activities Summer',
      category: 'Lookbook',
      imageUrl: 'assets/images/lukas-292999.jpg',
      createdAt: 'March 04, 2024',
    },
  ];
}
