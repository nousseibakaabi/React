pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Récupération du code source') {
            steps {
                checkout scm
            }
        }

        stage('Affichage de la date système') {
            steps {
                script {
                    def date = new Date()
                    echo "Date système actuelle : ${date}"
                }
            }
        }
    }

    post {
        always {
            echo 'Build terminé.'
        }
    }
}
