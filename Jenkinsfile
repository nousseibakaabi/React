pipeline {
    agent any

    triggers {
        // Déclenche le pipeline dès qu'un push est détecté dans le référentiel Git
        pollSCM('H/5 * * * *') // Vérifie toutes les 5 minutes si un changement a été détecté
    }

    stages {
        stage('Récupération du code source') {
            steps {
                // Récupère le code source depuis le référentiel Git
                checkout scm
            }
        }

        stage('Affichage de la date système') {
            steps {
                // Affiche la date système
                script {
                    def date = new Date()
                    echo "Date système actuelle : ${date}"
                }
            }
        }
    }

    post {
        always {
            // Nettoyage ou actions post-build
            echo 'Build terminé.'
        }
    }
}
