import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-modal',
  template: `
    <div>
      <div>
        <div></div>
        <div>
          <div>
            <div>
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = '';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onClose() {
    this.modalService.toggleModal(this.modalID);
  }
}
