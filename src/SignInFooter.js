import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";
import React from 'react';
// import { Translations } from "@aws-amplify/ui-components";
import { I18n } from 'aws-amplify';

export function SignInFooter() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();
  // const footerText = I18n.get([Translations.RESET_PASSWORD_TEXT]);
  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      {/* <Link onClick={toResetPassword}>{footerText}</Link> */}
    </Flex>
  );
}
