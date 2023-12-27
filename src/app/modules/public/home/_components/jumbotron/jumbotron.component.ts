import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  template: `
    <section class="jumbotron">
      <div class="container-xl mx-auto px-4">
        <div class="cta">
          <h4 class="sub-title animated uppercase font-semibold">Lookbook</h4>
          <h1 class="title mt-4 mb-3 text-6xl uppercase">
            Denim Mixed <br />Layering Combine <br />collect
          </h1>
          <p class="text-lg mb-8">
            We love seeing how our Raifa wearers like to wear their Norda
          </p>
          <div class="btn-style-1">
            <a
              class="animated btn-1-padding-1"
              href="product-details.html"
              tabindex="0"
              >Explore Now</a
            >
          </div>
        </div>
        <img class="image" src="assets/images/cta-thin.png" />
      </div>
    </section>
  `,
  styles: [
    `
      .jumbotron {
        background-color: #f4f4f4;
        position: relative;
        overflow: hidden;
        height: 680px;

        .container-xl {
          position: relative;
          height: 100%;
          .cta {
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translateY(-50%);

            .title {
              line-height: 70px;
            }

            .sub-title {
            }

            p {
              line-height: 28px;
              width: 64%;
            }
          }

          .image {
            position: absolute;
            top: -12%;
            right: 0%;
            // transform: translateY(-50%);
          }
        }
      }
    `,
  ],
})
export class JumbotronComponent {}
