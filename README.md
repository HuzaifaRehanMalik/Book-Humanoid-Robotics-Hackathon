# Physical AI & Humanoid Robotics Textbook

An AI-native textbook on Physical AI and Humanoid Robotics, built with Docusaurus, Claude Code, and Spec-Kit Plus.

## Overview

This textbook provides comprehensive coverage of Physical AI and Humanoid Robotics, including:

- Foundations of robotics and AI integration
- Control systems and locomotion
- Sensor and actuator technologies
- Learning algorithms and adaptation
- Ethics and safety considerations
- Future directions and applications

## Features

- Complete textbook content on Physical AI & Humanoid Robotics
- Interactive documentation with Docusaurus
- AI-native content creation and maintenance
- Integrated RAG chatbot for Q&A with textbook content
- Mobile-responsive design
- Search functionality

## Structure

The textbook is organized into several key sections:

1. **Foundations**: Basic concepts of Physical AI and humanoid robotics
2. **Core Systems**: Control, sensing, and actuation systems
3. **Advanced Topics**: Learning, ethics, and future directions

## Development

This project uses:
- Docusaurus for documentation
- TypeScript for type safety
- React for interactive components
- Claude Code for AI-assisted development

## Running Locally

### Frontend (Website)
1. Navigate to the `website` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run start`

### Backend (API)
1. Navigate to the `api` directory
2. Install dependencies: `pip install -r requirements.txt`
3. Set up environment variables (see `.env.example` in the api directory)
4. Load textbook content: `python load_textbook_content.py`
5. Start the API server: `python -m uvicorn src.main:app --host 0.0.0.0 --port 8000`

### Environment Configuration
- For the frontend to connect to the backend API, set the `REACT_APP_API_BASE_URL` environment variable in the website directory
- The backend requires OpenAI API key and other environment variables as specified in the api directory

## Deployment

### Backend API Deployment
The backend API can be deployed to various cloud platforms. The project includes a Dockerfile for containerized deployment.

#### Free Hosting Options
The API can be deployed for free on several platforms:

**Railway (Recommended for free tier)**
1. Sign up at Railway.app
2. Connect your GitHub repository
3. Create a new project and select this repository
4. Set the required environment variables (OPENAI_API_KEY, etc.)
5. Deploy the project

**Render (Free Tier)**
1. Sign up at Render.com
2. Create a new Web Service
3. Connect to your GitHub repository
4. Use the following settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python load_textbook_content.py && python -m uvicorn src.main:app --host 0.0.0.0 --port $PORT`
5. Set the required environment variables

**Heroku (Free Tier)**
1. Sign up at Heroku.com
2. Install the Heroku CLI
3. Create a new app
4. Add the Heroku Python buildpack
5. Set the required environment variables
6. Deploy using Git

### Frontend Deployment
The Docusaurus frontend can be deployed to platforms like Vercel, Netlify, or GitHub Pages following standard Docusaurus deployment practices.

## Contributing

This project uses Spec-Kit Plus and Claude Code for structured development. See the `specs/` directory for feature specifications and implementation plans.

## License

This textbook is open source and available under the MIT License.
