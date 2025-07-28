# Frontend Todo App

A simple, modern todo application built with Next.js and React. This is a purely frontend application that stores todos locally in your browser using localStorage.

## Features

- ✅ **Add, edit, and delete todos**
- ✅ **Mark todos as complete/incomplete**
- ✅ **Filter todos by status (All, Active, Completed)**
- ✅ **Clear completed todos**
- ✅ **Persistent storage using localStorage**
- ✅ **Responsive design**
- ✅ **No backend required - works entirely in the browser**

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aws-amplify-practice
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## How It Works

- **Local Storage**: All todos are saved in your browser's localStorage
- **No Backend**: This app works entirely in the frontend
- **Real-time Updates**: Changes are immediately reflected in the UI
- **Persistent Data**: Your todos will persist between browser sessions

## Deployment

This app can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `.next` folder after building
- **AWS S3 + CloudFront**: Upload the built files to S3
- **GitHub Pages**: Deploy using GitHub Actions

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **localStorage**: Client-side data persistence

## License

This project is licensed under the MIT-0 License. See the LICENSE file.