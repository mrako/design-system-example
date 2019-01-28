pipeline {
  agent any

  options {
    timeout(time: 20, unit: 'MINUTES')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        runCompose("-f docker-compose.yml -f compose/test.yml -f compose/robot.yml", "build --pull")
      }
    }

    stage('Quality') {
      parallel {
        stage('Lint') {
          steps {
            runCompose("-f compose/test.yml", "run lint")
          }
        }

        stage('Audit') {
          steps {
            sleep 1
            runCompose("-f compose/test.yml", "run audit")
          }
        }
      }
    }

    stage('Unit Test') {
      parallel {
        stage('Mocha') {
          steps {
            runCompose("-f compose/test.yml", "run mocha")
          }
        }
        stage('Jest') {
          steps {
            sleep 1
            runCompose("-f compose/test.yml", "run jest")
          }
        }
      }
    }


    stage('Robot Test') {
      steps {
        runCompose("-f docker-compose.yml -f compose/test.yml -f compose/robot.yml", "down -v")
        runCompose("-f compose/robot.yml", "run robot.backend ./wait-for robot.db:5432 -- npm run db:seed:all")
        runCompose("-f compose/robot.yml", "run robot")
      }
      post {
        always {
          step([$class: 'ArtifactArchiver', artifacts: 'results/robot/log.html, results/robot/selenium-*.png'])
          
          step([$class: 'RobotPublisher',
              disableArchiveOutput: false,
              logFileName: 'results/robot/log.html',
              onlyCritical: true,
              otherFiles: '',
              outputFileName: 'results/robot/output.xml',
              outputPath: '.',
              passThreshold: 90,
              reportFileName: 'results/robot/report.html',
              unstableThreshold: 100]);
        }
      }
    }

    stage('Deploy') {
      steps {
        runCompose("-f docker-compose.yml -f compose/test.yml -f compose/robot.yml", "down -v")
        runDeploy()
      }
    }
  }
/*
  post {
    always {
      // notifyBuild(currentBuild.result)
    }
  }
*/
}

def runCompose(composeFiles = "", operation = "build", setEnvironment = "") {
  sh "${setEnvironment} docker-compose -p designsystem --project-directory . ${composeFiles} ${operation}"
}

def runDeploy() {
  sh "bin/deploy.sh"
}

def notifyBuild(String buildStatus = 'STARTED') {
  buildStatus = buildStatus ?: 'SUCCESS'

  def colorCode = '#FF9FA1'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"
  def details = """<p>STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
    <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>"""

  if (buildStatus == 'STARTED') {
    colorCode = '#D4DADF'
  } else if (buildStatus == 'SUCCESS') {
    colorCode = '#BDFFC3'
  } else {
    colorCode = '#FF9FA1'
  }

  slackSend(teamDomain: "", token: "", color: colorCode, message: summary)
}
