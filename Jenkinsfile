pipeline {
    agent any

    tools{nodejs "node"}

    stages {

        stage("Cypress parallel test suit") {
            parallel {
                stage("Slave node1") {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: "https://github.com/SaboorArif09/CypressAutomationFramework.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run %script%" 
                    }
                }
                stage("Slave node2") {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: "https://github.com/SaboorArif09/CypressAutomationFramework.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run %script%" 
                    }
                }
            }

        }
    }
}