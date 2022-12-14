import { Heading, useTheme } from "@aws-amplify/ui-react";
import React from 'react';
export function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
      MOUNTAIN グループウェア
    </Heading>
  );
}
