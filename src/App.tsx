import { Suspense, lazy, memo } from 'react';
import Navbar from '@shared/components/Navbar';
import Footer from '@shared/components/Footer';
import Hero from '@features/hero/Hero';
import { ThemeProvider } from '@shared/context/ThemeContext';

const MainContent = lazy(() => import('@features/MainContent'));

const Skeleton = memo(() => (
  <div className="section-py">
    <div className="wrap">
      <div className="h-96 rounded-xl3 bg-surface-100 animate-pulse" />
    </div>
  </div>
));
Skeleton.displayName = 'Skeleton';

const App = memo(() => (
  <ThemeProvider>
    <div className="min-h-screen bg-surface-50 text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Skeleton />}>
          <MainContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  </ThemeProvider>
));

App.displayName = 'App';
export default App;
