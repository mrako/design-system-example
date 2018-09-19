*** Variables ***

${VALID EMAIL}                    test.user@eficode.com
${VALID PASSWORD}                 GoneFishing1

${INVALID EMAIL}                  thisISnotAn@EMAIL
${INVALID PASSWORD}               notvalidpassword

${EMPTY PASSWORD}

*** Keywords ***

Login
  [Arguments]     ${email}    ${password}
  Input Text      email       ${email}
  Input Text      password    ${password}
  Click Button    LOG IN
