# VADER-SENTIMENT-ANALYSIS-ASSIGNMENT
# Backend Sentiment Analysis

## Overview

This project is a backend server application that integrates a pre-trained sentiment analysis model with secure file handling using Express.js and MongoDB.

## Features

1. **Sentiment Analysis**: Analyzes sentiment of provided text (positive, negative, neutral).
2. **Secure File Handling**: Upload and store files securely with user authentication.
3. **User Authentication**: User registration and login functionality with JWT-based authentication.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/backend-sentiment-analysis.git
    cd backend-sentiment-analysis
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root directory and add the following:
    ```
    MONGODB_URI=mongodb://localhost:27017/backend-sentiment-analysis
    JWT_SECRET=your_jwt_secret_key
