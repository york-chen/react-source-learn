import {createRoot} from 'react-dom/client';
import App from './App';
// 获取 DOM 节点
const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App/>);
} else {
  console.error('Container #app not found');
}
