import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.message || 'An unexpected error occurred.',
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Application ErrorBoundary caught:', error, errorInfo);
  }

  handleReload = (): void => {
    this.setState({ hasError: false, errorMessage: '' });
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8FC] text-[#231F29] flex items-center justify-center px-6 py-12">
          <div className="max-w-lg w-full rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-8 space-y-4">
            <h1 className="font-serif text-2xl font-medium text-[#231F29]">
              Something went wrong
            </h1>
            <p className="text-sm text-[#433D4D] leading-relaxed">
              We encountered an unexpected error while loading this view. You can reload the page to try again.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="px-5 py-2.5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
