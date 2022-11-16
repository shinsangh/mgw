import { Flex, Text, useTheme } from "@aws-amplify/ui-react";
import React from 'react';

export function Footer() {
  const { tokens } = useTheme();
  return (
    <Flex justifyContent="center" padding={tokens.space.medium}>
      <Text>&copy; 2022 MOUNTAIN Corp. All Rights Reserved</Text>
    </Flex>
  );
}
