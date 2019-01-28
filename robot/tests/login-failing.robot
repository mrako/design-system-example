*** Settings ***

Resource   ${CURDIR}/../resources/common.robot
Resource   ${CURDIR}/../resources/login-variables.robot

Test template     Login Should Fail With Incorrect Credentials
Suite Setup       Open browser and go to homepage
Suite Teardown    Close All Browsers


*** Test cases ***             USERNAME            PASSWORD

Empty username                 ${EMPTY}            ${VALID PASSWORD}
Wrong username                 ${INVALID EMAIL}    ${VALID PASSWORD}
Wrong password                 ${VALID EMAIL}      ${INVALID PASSWORD}
Wrong username and password    ${INVALID EMAIL}    ${INVALID PASSWORD}
Empty password                 ${VALID EMAIL}      ${EMPTY}
Empty username and password    ${EMPTY}            ${EMPTY}


*** Keywords ***

Login Should Fail With Incorrect Credentials
  [Arguments]           ${email}    ${password}
  Login                 ${email}    ${password}
  Verify login page is open
