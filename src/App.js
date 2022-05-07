import './App.css';
import Sidebar from './components/sidebar';

function App(props) {
  const { hideSidebar } =  props;
  return (
    <div >
      {!hideSidebar && <Sidebar />}
      {props.children}
    </div>
  );
}

export default App;
