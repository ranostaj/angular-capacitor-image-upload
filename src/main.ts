import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ImageUploadComponent } from './app/image-upload/image-upload.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Image Upload Demo</h1>
      <app-image-upload></app-image-upload>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
      text-align: center;
    }
    
    h1 {
      margin-bottom: 2rem;
      color: #333;
    }
  `],
  standalone: true,
  imports: [ImageUploadComponent]
})
export class App {
}

//defineCustomElements(window);
bootstrapApplication(App, {
  providers: [
    provideAnimations()
  ]
}).catch(err => console.error(err));