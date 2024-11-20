import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
const DataFetchingComponent = React.lazy(() => import('./components/DataFetchingComponent'));

function PostSkeleton() {
  return (
    <div className="skeleton">
      Loading....
    </div>
  );
}

function App() {
  return (
    <div>
      <ErrorBoundary>
        <React.Suspense fallback={<PostSkeleton/>}>
          <DataFetchingComponent />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;