import React, { Component } from 'react';
import './styles.scss'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className='error-wrapper'><h1>Something went wrong. Please try again later.</h1></div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
