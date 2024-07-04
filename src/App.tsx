import styles from './App.module.scss';

import { FocusStyleManager } from '@blueprintjs/core';

import { HomePage } from './components/home-page/home-page';

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    return (
        <div className={styles.App}>
            <HomePage />
        </div>
    );
}
export default App;
