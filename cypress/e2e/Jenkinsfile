pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'shibinbritto-github', url: 'https://github.com/ShibinBritto/UVCucumberDocker.git'
                // IMPORTANT: Replace 'github-credentials' with the actual ID you gave your GitHub credentials in Jenkins
            }
        }
        stage('Install Dependencies') {
            steps {
                nodejs(tool: 'Node.js') { // IMPORTANT: Use the exact name you gave to your NodeJS installation in Jenkins' Global Tool Configuration
                    sh 'npm install' // or 'yarn install' if you use yarn
                }
            }
        }
        stage('Run Cypress Tests') {
            steps {
                nodejs(tool: 'Node.js') {
                    sh 'npx cypress run' // or 'yarn cypress run'
                }
            }
        }
    }
}