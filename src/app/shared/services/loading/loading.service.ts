import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading = true;

  private spinnerTopRef: OverlayRef;

  constructor(private overlay: Overlay) {
    this.spinnerTopRef = this.createOverlay();
  }

  createOverlay(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  show() {
    this.spinnerTopRef.attach(new ComponentPortal(LoadingComponent));
    return (this.loading = true);
  }

  stop() {
    this.spinnerTopRef.detach();
    return (this.loading = false);
  }
}
