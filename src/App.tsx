import styles from './App.module.scss';

import { FocusStyleManager } from '@blueprintjs/core';

import { HomePage } from './components/home-page/home-page';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}
export default App;
