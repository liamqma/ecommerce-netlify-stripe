import './App.css';

import SectionAnnouncementBar from './section-announcement-bar';
import SectionHeader from './section-header';
import SectionCollections from './section-collections';

function App() {
  return (
    <div className="App">
      <SectionAnnouncementBar />
      <SectionHeader />
      <SectionCollections />
    </div>
  );
}

export default App;
