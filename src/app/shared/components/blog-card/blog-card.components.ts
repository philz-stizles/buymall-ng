import { Component, Input } from '@angular/core';
import { Blog } from '../../../core/models/blog.model';

@Component({
  selector: 'app-blog-card',
  template: `
    <div class="blog-card mb-30">
      <div class="blog-img mb-4">
        <a href="blog-details.html"
          ><img src="{{ blog.imageUrl }}" alt="blog-img"
        /></a>
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <ul>
            <li>
              <a class="font-bold" href="#">{{ blog.category }} </a>
            </li>
            <li>{{ blog.createdAt }}</li>
          </ul>
        </div>
        <h3 class="text-lg font-bold mt-4">
          <a href="blog-details.html">{{ blog.title }}</a>
        </h3>
      </div>
    </div>
  `,
  styles: [
    `
      .blog-card {
        .blog-content {
          .blog-meta {
            ul {
              display: flex;
              flex-wrap: wrap;

              li {
                &:not(:last-of-type) {
                  margin-right: 30px;
                  position: relative;

                  &::before {
                    position: absolute;
                    content: '';
                    right: -16px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    width: 1px;
                    height: 12px;
                    background-color: #000;
                  }
                }
              }
            }
          }

          h3 {
            font-size: 20px;
            line-height: 30px;
            letter-spacing: -0.25px;

            a {
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    `,
  ],
})
export class BlogCardComponent {
  @Input() blog!: Blog;
}
