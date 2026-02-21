# Image Size Pro

## Installation Instructions

To install the Image Size Pro project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Usamamayo01/Image-Size-Pro.git
   cd Image-Size-Pro
   ```

2. **Install dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and add the necessary environment variables:
   ```
   # Example
   API_KEY=your_api_key_here
   ```

## Usage Guide

To start the application locally, run:
```bash
npm start
```

You can then access the application in your web browser at `http://localhost:3000`.

## Deployment to Vercel

To deploy the project to Vercel, follow these steps:

1. **Sign up or log in** at [Vercel](https://vercel.com/).
2. **Import your GitHub repository**:
   * Go to the Vercel dashboard.
   * Click on "New Project" and select your `Image-Size-Pro` repository.
3. **Configure Project Settings**:
   * Set any environment variables required for your application.
4. **Deploy**:
   * Click the "Deploy" button and wait for the build process to complete.

## Features
- Upload images and get their dimensions.
- Real-time image size display.
- Support for various image formats (JPEG, PNG, GIF).
- Responsive design for mobile and desktop.
- User-friendly interface.

## API Endpoints
1. `POST /api/upload`
   - Upload an image to obtain its size.
   - **Parameters**: `file` (binary - the image file)

2. `GET /api/size`
   - Retrieve the size of a previously uploaded image.
   - **Parameters**: `imageId` (string - the ID of the image)

## Troubleshooting
- **Error: `API_KEY not found`**: Ensure that you have correctly set your API key in the `.env` file.
- **Image uploads failing**: Check file size limits and format compatibility.
- **Deployment issues**: Review the error logs in the Vercel dashboard for insights.

## Project Structure
- `src/` - Contains the source code for the application.
  - `components/` - React components.
  - `pages/` - Next.js pages.
  - `styles/` - Global and component-specific styles.
- `public/` - Static files such as images and icons.
- `.env` - Environment variable configuration file.
- `package.json` - Project metadata and dependencies file.
- `README.md` - Project documentation.

For more information, feel free to reach out to the project maintainers.