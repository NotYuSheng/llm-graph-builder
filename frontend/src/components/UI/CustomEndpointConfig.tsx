import React from 'react';
import { TextInput, Flex, Typography } from '@neo4j-ndl/react';
import { useFileContext } from '../../context/UsersFiles';

const CustomEndpointConfig: React.FC = () => {
  const {
    model,
    customEndpointUrl,
    setCustomEndpointUrl,
    customModelName,
    setCustomModelName,
    customApiKey,
    setCustomApiKey,
  } = useFileContext();

  if (model !== 'custom_endpoint') {
    return null;
  }

  return (
    <Flex flexDirection="column" gap="4">
      <Typography variant="subheading-small">Custom Endpoint Configuration</Typography>
      <TextInput
        label="Endpoint URL"
        value={customEndpointUrl}
        onChange={(e) => setCustomEndpointUrl(e.target.value)}
        placeholder="https://your-endpoint.com/v1"
        helpText="OpenAI-compatible API endpoint URL"
        isRequired
      />
      <TextInput
        label="Model Name"
        value={customModelName}
        onChange={(e) => setCustomModelName(e.target.value)}
        placeholder="gpt-3.5-turbo"
        helpText="Model name as expected by your endpoint"
        isRequired
      />
      <TextInput
        label="API Key"
        value={customApiKey}
        onChange={(e) => setCustomApiKey(e.target.value)}
        placeholder="Your API key"
        helpText="API key for authentication"
        isRequired
        htmlAttributes={{ type: "password" }}
      />
    </Flex>
  );
};

export default CustomEndpointConfig;