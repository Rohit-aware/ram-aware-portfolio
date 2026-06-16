import { memo } from 'react';
import About from '@features/about/About';
import Metrics from '@features/metrics/Metrics';
import Expertise from '@features/expertise/Expertise';
import Experience from '@features/experience/Experience';
import Projects from '@features/projects/Projects';
import Achievements from '@features/achievements/Achievements';
import Leadership from '@features/leadership/Leadership';
import Contact from '@features/contact/Contact';

const MainContent = memo(() => (
  <>
    <About />
    <Metrics />
    <Expertise />
    <Experience />
    <Projects />
    <Achievements />
    <Leadership />
    <Contact />
  </>
));

MainContent.displayName = 'MainContent';
export default MainContent;
