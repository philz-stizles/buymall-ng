import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Color } from '../../../../../core/models/color.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ColorService } from '../../../../../core/services/color.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-color-upsert',
  templateUrl: './color-upsert.component.html',
  styleUrl: './color-upsert.component.scss',
})
export class ColorUpsertComponent implements OnInit, AfterViewInit {
  @ViewChild('colorForm', { static: false }) colorForm!: NgForm;
  isLoading = false;
  error: string | null = null;
  selectedColor?: Color;

  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const colorId = params['id']; // If id must be a number, then +params['id']
      if (colorId) {
        const color = this.colorService.getColor(colorId);
        this.selectedColor = color;
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.selectedColor) {
      this.initForm(this.selectedColor);
    }
  }

  isEditMode() {
    return !!this.selectedColor;
  }

  onSubmit(colorForm: NgForm) {
    this.isLoading = true;
    this.error = null;

    let upsertObservable: Observable<Object>; //

    const color: any = {
      description: colorForm.value.description,
    };

    if (this.isEditMode()) {
      upsertObservable = this.colorService.updateColor(
        this.selectedColor?.id!,
        color
      );
    } else {
      upsertObservable = this.colorService.createColor(color);
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
        this.colorForm.resetForm();
      },
    });
  }

  private initForm(color?: Color) {
    if (color) {
      setTimeout(() => {
        this.colorForm.setValue({});

        // this.colorForm.reset({
        //   code: color.code,
        //   description: color.description,
        //   discount: color.discount,
        //   expiresOn: color.expiresOn ?? '',
        // });
      });
    }
  }
}
