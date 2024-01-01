import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template: `
    <li class="menu-item">
      <a routerLink="{{ label | linkify }}" routerLinkActive="active-link"
        ><span class="menu-item__icon"
          ><span class="material-symbols-outlined"> {{ icon }} </span></span
        ><span class="menu-item__label">{{ label }}</span></a
      >
    </li>
  `,
  styles: [
    `
      .menu-item {
        a {
          background-color: transparent;
          outline: 0px;
          border: 0px;
          margin: 0px 0px 4px;
          cursor: pointer;
          vertical-align: middle;
          appearance: none;
          flex-grow: 1;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          min-width: 0px;
          box-sizing: border-box;
          text-align: left;
          transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          border-radius: 8px;
          color: rgb(99, 115, 129);
          padding: 4px 8px 4px 12px;
          min-height: 36px;

          &:hover {
            background-color: rgba(145, 158, 171, 0.08);
          }

          .menu-item__icon {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin-right: 16px;
          }

          .menu-item__label {
            flex: 1 1 auto;
            min-width: 0px;
            width: 100%;
            max-width: 100%;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 500;
            text-transform: capitalize;
          }
        }
      }

      .active-link {
        background-color: rgba(0, 167, 111, 0.16) !important;
        color: rgb(0, 167, 111) !important;
      }
    `,
  ],
})
export class MenuItemComponent {
  @Input() label!: string;
  @Input() icon!: string;
}
