pipeline {
    agent any

    tools{nodejs "node"}

    stages {

        stage("Cypress parallel test suit") {
            parallel {
                stage("Slave node1") {
                    agent {
                        label "remote_node 1"
                    }
                    steps {
                        git url: "https://github.com/SaboorArif09/CypressAutomationFramework.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run triggerAllTests-autostore-dashboard-parallel" 
                    }
                }
                stage("Slave node2") {
                    agent {
                        label "remote_node 2"
                    }
                    steps {
                        git url: "https://github.com/SaboorArif09/CypressAutomationFramework.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run triggerAllTests-autostore-dashboard-parallel" 
                    }
                }
            }

        }
    }
}