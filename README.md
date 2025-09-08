# Angular Capacitor Image Upload

A modern, cross-platform image upload application built with Angular 18 and Capacitor 5. This project demonstrates how to implement image uploading functionality that works seamlessly across web, iOS, and Android platforms.

[🚀 Live Demo](https://cameraupload.netlify.app/)

## ✨ Features

- **📱 Cross-Platform**: Works on web browsers, iOS, and Android devices
- **📸 Camera Integration**: Take photos directly using device camera
- **📁 File Upload**: Upload images from device storage with drag-and-drop support
- **🖼️ Image Preview**: Real-time preview of selected/captured images
- **🗑️ Image Management**: Remove uploaded images with one click
- **📱 Responsive Design**: Optimized for both desktop and mobile devices
- **⚡ Performance**: Built with Angular's latest standalone components architecture

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 18
- **Mobile Framework**: Capacitor 5
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **PWA Elements**: Ionic PWA Elements

### Key Dependencies

- `@capacitor/camera`: Camera functionality for mobile devices
- `@capacitor/core`: Core Capacitor functionality
- `@ionic/pwa-elements`: PWA elements for web camera support
- `@angular/animations`: Angular animations support

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)
- Capacitor CLI (`npm install -g @capacitor/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ranostaj/angular-capacitor-image-upload.git
   cd angular-capacitor-image-upload
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📱 Mobile Development

### Android Setup

1. **Add Android platform**
   ```bash
   npm run cap:add:android
   ```

2. **Sync changes**
   ```bash
   npm run cap:sync
   ```

3. **Open in Android Studio**
   ```bash
   npm run cap:open:android
   ```

### iOS Setup

1. **Add iOS platform**
   ```bash
   npm run cap:add:ios
   ```

2. **Sync changes**
   ```bash
   npm run cap:sync
   ```

3. **Open in Xcode**
   ```bash
   npm run cap:open:ios
   ```

## 🏗️ Build and Deployment

### Web Build
```bash
npm run build
```

### Mobile Build
After building for web, sync changes to mobile platforms:
```bash
npm run cap:sync
```

## 📁 Project Structure

```
src/
├── app/
│   └── image-upload/
│       └── image-upload.component.ts    # Main image upload component
├── global_styles.css                    # Global styles
├── index.html                          # HTML entry point
└── main.ts                             # Angular bootstrap file
```

## 🎯 Usage

### Basic Image Upload

The application provides multiple ways to upload images:

1. **Camera Capture**: Click the "Take Photo" button to capture images using the device camera
2. **File Selection**: Click on the upload area to select images from device storage
3. **Drag & Drop**: Drag image files directly onto the upload area (web only)

### Component Integration

To use the image upload component in your own project:

```typescript
import { ImageUploadComponent } from './app/image-upload/image-upload.component';

@Component({
  // ... your component configuration
  imports: [ImageUploadComponent]
})
export class YourComponent {
  // Your component logic
}
```

```html
<app-image-upload></app-image-upload>
```

## ⚙️ Configuration

### Capacitor Configuration

The app is configured in `capacitor.config.ts`:

```typescript
const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Angular Image Upload',
  webDir: 'dist/demo',
  server: {
    androidScheme: 'https'
  }
};
```

### Camera Permissions

The app requests camera permissions automatically when accessing camera functionality. Make sure to handle permissions appropriately for your target platforms.

## 🔧 Development Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run cap:add:android` - Add Android platform
- `npm run cap:add:ios` - Add iOS platform
- `npm run cap:sync` - Sync web assets to native platforms
- `npm run cap:open:android` - Open project in Android Studio
- `npm run cap:open:ios` - Open project in Xcode

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Troubleshooting

### Common Issues

**Camera not working on web browsers:**
- Ensure you're serving the app over HTTPS in production
- Check if `@ionic/pwa-elements` is properly loaded

**Build errors:**
- Run `npm install` to ensure all dependencies are installed
- Check that you have the required Node.js version (18+)

**Mobile platform issues:**
- Ensure you have the latest versions of Android Studio or Xcode
- Run `npm run cap:sync` after making changes to web assets

## 🔗 Useful Links

- [Angular Documentation](https://angular.io/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Capacitor Camera Plugin](https://capacitorjs.com/docs/apis/camera)
- [Ionic PWA Elements](https://github.com/ionic-team/ionic-pwa-elements)

---

Made with ❤️ using Angular and Capacitor
