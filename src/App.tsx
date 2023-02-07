import './App.css';

import SectionAnnouncementBar from './section-announcement-bar';
import SectionHeader from './section-header';
import SectionCollections from './section-collections';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <SectionAnnouncementBar />
      <SectionHeader />
      <SectionCollections />
      <Footer />
    </div>
  );
}

export default App;
