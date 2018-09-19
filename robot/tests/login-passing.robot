*** Settings ***

Resource   ${PROJECTROOT}${/}resources${/}common.robot
Resource   ${PROJECTROOT}${/}resources${/}variables.robot

Test Setup          Open browser and go to homepage
Test Teardown       Close All Browsers

*** Test cases ***

Should login successfully
  Login with             ${VALID EMAIL}    ${VALID PASSWORD}
  Page Should Contain    Welcome!
