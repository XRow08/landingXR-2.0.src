import { Home, About, Team } from './pages';
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from '@ap.cx/react-fullpage';

export default function App() {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection>
          <Home />
        </FullpageSection>
        <FullpageSection>
          <About />
        </FullpageSection>
        <FullpageSection>
          <Team />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
