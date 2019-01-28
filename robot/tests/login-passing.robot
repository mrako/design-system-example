*** Settings ***

Resource   ${CURDIR}/../resources/common.robot
Resource   ${CURDIR}/../resources/login-variables.robot

Test Setup          Open browser and go to homepage
Test Teardown       Close All Browsers

*** Test cases ***

Should login successfully
  Login                  ${VALID EMAIL}    ${VALID PASSWORD}
  Verify homepage is open
