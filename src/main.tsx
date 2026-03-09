import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { validateEnvironment } from './utils/envValidation';
import './index.css';

// Validate environment variables before app starts
validateEnvironment();

// Force page to always start at the top on load/reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Ensure scroll position is at top immediately
window.scrollTo(0, 0);

// Additional safeguard: scroll to top after DOM is fully loaded
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
