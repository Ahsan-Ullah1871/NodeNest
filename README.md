# NodeNest 🚀

A production-ready Node.js and Express starter kit with TypeScript support,
designed to kickstart your backend development with best practices and modern
tooling.

[![npm version](https://img.shields.io/npm/v/NodeNest.svg)](https://www.npmjs.com/package/NodeNest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.18-green)](https://expressjs.com/)

## ✨ Features

- 🔥 TypeScript support with proper configurations
- ⚡️ Express.js with modern best practices
- 🛡️ Built-in error handling middleware
- 🔒 Security best practices with proper middleware setup
- 📝 Zod for runtime type validation
- 🎯 ESLint and Prettier for code consistency
- 🚦 Environment configuration with dotenv
- 📁 Modular project structure
- 🔄 Hot reload in development
- 🎨 Clean architecture principles
- 📦 Easy deployment configuration

## 🚀 Quick Start

```bash
# Using npx (recommended)
npx create-node-nest-kit my-app

# Or using npm
npm init node-nest-kit my-app

cd my-app
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── app/
│   ├── errors/
│   │   └── ApiError.ts
│   ├── middlewares/
│   │   └── globalErrorHandler.ts
│   ├── modules/
│   │   └── blogs/
│   │       ├── condition.ts
│   │       ├── constant.ts
│   │       ├── controller.ts
│   │       ├── interface.ts
│   │       ├── routes.ts
│   │       └── services.ts
│   └── shared/
│       ├── catchAsync.ts
│       ├── pick.ts
│       └── sendResponse.ts
├── config/
│   └── index.ts
├── helpers/
├── interfaces/
├── routes/
└── server.ts
```

## 🛠️ Available Scripts

```json
{
	"start": "Start the production server",
	"dev": "Start development server with hot reload",
	"build": "Build for production",
	"lint:check": "Check for linting issues",
	"lint:fix": "Fix linting issues",
	"prettier:check": "Check code formatting",
	"lint-prettier": "Run both lint and prettier checks"
}
```

## 💻 Development

```bash
# Start development server
npm run dev

# Check linting
npm run lint:check

# Fix linting issues
npm run lint:fix

# Check and fix code formatting
npm run prettier:check
```

## 🔧 Configuration

1. Create a `.env` file in the root directory
2. Copy contents from `.env.example`
3. Modify the values according to your needs

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=your_database_url
```

## 🌟 Features in Detail

### Error Handling

The starter kit comes with a robust error handling system:

```typescript
// Example of using the ApiError
throw new ApiError(400, "Bad Request");

// Using catchAsync for async route handlers
const createBlog = catchAsync(async (req: Request, res: Response) => {
	// Your code here
});
```

### Validation with Zod

```typescript
import { z } from "zod";

const blogValidation = z.object({
	title: z.string(),
	content: z.string(),
	author: z.string(),
});
```

### Request Response Pattern

```typescript
// Controller example
const getBlogs = catchAsync(async (req: Request, res: Response) => {
	const blogs = await BlogService.getAllBlogs();

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: "Blogs retrieved successfully",
		data: blogs,
	});
});
```

## 📚 API Documentation

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | /api/v1/blogs     | Get all blogs       |
| POST   | /api/v1/blogs     | Create a new blog   |
| GET    | /api/v1/blogs/:id | Get a specific blog |
| PATCH  | /api/v1/blogs/:id | Update a blog       |
| DELETE | /api/v1/blogs/:id | Delete a blog       |

## 🔐 Security

- CORS enabled
- Helmet for security headers
- Rate limiting
- XSS protection
- Security best practices implemented

## 🚀 Deployment

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## 📈 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## 🙌 Acknowledgements

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://github.com/colinhacks/zod)
- All other amazing libraries used in this project

## 📧 Contact

Ahsanullah - [GitHub](https://github.com/Ahsan-Ullah1871)

Project Link:
[https://github.com/Ahsan-Ullah1871/NodeNest](https://github.com/Ahsan-Ullah1871/NodeNest)

---

Made with ❤️ by Ahsanullah

