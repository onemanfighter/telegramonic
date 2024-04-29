import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/FooterComponent';

/**
 * UI function component for the main app.
 *
 * @returns Main App ui
 */
function App() {
  return (
    <div>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div>
        <Outlet />
        <div className=" fixed top-0 left-0 right-0 bottom-[1000] outline"></div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
