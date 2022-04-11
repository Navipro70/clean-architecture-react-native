import React from 'react';
import { Text } from 'react-native'

export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log('TODO connect logger for errors', error)
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
        // TODO add your custom error view
      return <Text />;
    }

    return this.props.children;
  }
}
