import React from "react";

class ErrorBoundary extends React.Component {
  producer(props) {
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this?.state?.hasError) {
      return <div>Error: Something is wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;