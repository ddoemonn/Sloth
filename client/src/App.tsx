
import { Outlet } from 'react-router-dom';
import './style.css'

const App: React.FC = () => {


    return (
        <div>
            <Outlet />
        </div>
    );
};

export default App;