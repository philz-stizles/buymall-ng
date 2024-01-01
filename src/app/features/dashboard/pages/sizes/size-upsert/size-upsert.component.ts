import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Size } from '../../../../../core/models/size.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SizeService } from '../../../../../core/services/size.service';

@Component({
  selector: 'app-size-upsert',
  templateUrl: './size-upsert.component.html',
  styles: [
    `
      .input-error {
        position: absolute;
        top: 104%;
        left: 0;
        right: 0;
      }
    `,
  ],
})
export class SizeUpsertComponent implements OnInit {
  @ViewChild('value', { static: false }) valueRef!: ElementRef;
  @ViewChild('description', { static: false }) descriptionRef!: ElementRef;
  isLoading = false;
  error: string | null = null;
  selectedSize?: Size;

  constructor(
    private sizeService: SizeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const sizeId = params['id']; // If id must be a number, then +params['id']
      if (sizeId) {
        const size = this.sizeService.getSize(sizeId);
        if (size) {
          this.selectedSize = size;
          this.initForm(this.selectedSize);
        }
      }
    });
  }

  isEditMode() {
    return !!this.selectedSize;
  }

  onSubmit() {
    this.isLoading = true;
    this.error = null;

    let upsertObservable: Observable<Object>;

    const size: Size = {
      value: this.valueRef.nativeElement.value,
      description: this.descriptionRef.nativeElement.value,
    };

    if (this.isEditMode()) {
      upsertObservable = this.sizeService.updateSize(
        this.selectedSize?.id!,
        size
      );
    } else {
      upsertObservable = this.sizeService.createSize(size);
    }

    upsertObservable.subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate([this.isEditMode() ? '../..' : '../'], {
          relativeTo: this.activatedRoute,
        });
      },
      error: (err) => {
        this.error = err.message || 'An error occurred';
        this.isLoading = false;
      },
      complete: () => {
        this.resetForm();
      },
    });
  }

  private initForm(size: Size) {
    if (size) {
      (this.valueRef.nativeElement as HTMLInputElement).value = size.value;
      (this.descriptionRef.nativeElement as HTMLInputElement).value =
        size.description ?? '';
    }
  }

  private resetForm() {
    (this.valueRef.nativeElement as HTMLInputElement).value = '';
    (this.descriptionRef.nativeElement as HTMLInputElement).value = '';
  }
}
