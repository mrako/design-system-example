*** Settings ***

Resource   ${PROJECTROOT}${/}resources${/}common.robot

Test Setup          Open browser and go to homepage
Test Teardown       Close All Browsers

*** Test cases ***

Should login successfully
  Login with             test@eficode.com    fakepassword
  Page Should Contain    Welcome!

*** Keywords ***

Login with
  [Arguments]  ${email}  ${password}
  Input Text      email       ${email}
  Input Text      password    ${password}
  Click Button    LOGIN
