import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource, CameraDirection } from '@capacitor/camera';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="upload-container">
      <div class="upload-box" 
           [class.has-image]="imageUrl"
           (dragover)="onDragOver($event)"
           (drop)="onDrop($event)">
        
        <input type="file" 
               #fileInput
               (change)="onFileSelected($event)"
               capture="environment"
               accept="image/*"
               class="file-input">
        
        <div *ngIf="!imageUrl" class="upload-placeholder">
          
          <div class="button-group">
           
            <button (click)="openCamera()" class="camera-button">
              Take Photo
            </button>
          </div>
        </div>
        
        <img *ngIf="imageUrl" 
             [src]="imageUrl" 
             alt="Preview"
             class="preview-image">
      </div>
      
      <button *ngIf="imageUrl" 
              (click)="removeImage()"
              class="remove-button">
        Remove Image
      </button>
    </div>
  `,
  styles: [`
    .upload-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .upload-box {
      width: 200px;
      height: 200px;
      border: 2px dashed #ccc;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .upload-box.has-image {
      border-style: solid;
    }

    .file-input {
      display: none;
    }

    .upload-placeholder {
      text-align: center;
    }

    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .upload-button, .camera-button {
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      color: white;
      font-weight: 500;
    }

    .upload-button {
      background: #007bff;
    }

    .camera-button {
      background: #28a745;
    }

    .preview-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .remove-button {
      background: #dc3545;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class ImageUploadComponent {
  imageUrl: string | null = null;
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef<HTMLInputElement>;
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        saveToGallery: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        direction: CameraDirection.Rear,
        correctOrientation: true
      });
      
      this.imageUrl = image.dataUrl || null;
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  openCamera() {
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.click();
    }
  }
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.handleFile(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    
    const file = event.dataTransfer?.files[0];
    this.handleFile(file);
  }

  handleFile(file: File | undefined) {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.imageUrl = null;
  }
}