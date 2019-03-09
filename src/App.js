import React from 'react';
import Routes from './router';

import './styles.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)



const App = () => <Routes />;

export default App;
