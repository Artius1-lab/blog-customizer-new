import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app/App';

import './styles/index.scss';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
