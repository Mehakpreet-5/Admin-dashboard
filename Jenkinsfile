pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Mehakpreet-5/Admin-dashboard.git'
            }
        }

        stage('Backend - Install & Build') {
            steps {
                dir('server') {  // Navigate to backend folder
                    sh 'npm install'
                    sh 'npm run build'  // Modify if needed
                }
            }
        }

        stage('Frontend - Install & Build') {
            steps {
                dir('ff/my-project') {  // Navigate to actual frontend project
                    sh 'npm install'
                    sh 'npm run build'  // Modify based on frontend build script
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying MERN Project..."'
            }
        }
    }
}
