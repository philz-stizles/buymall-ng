import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  registerModal(id: string) {
    this.modals.push({
      id,
      isOpen: false,
    });
  }

  unRegisterModal(id: string) {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }

  isModalOpen(id: string) {
    return this.modals.find((modal) => modal.id === id)?.isOpen;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((modal) => modal.id === id);

    if(modal) {
      modal.isOpen = !modal?.isOpen
    }
  }
}
