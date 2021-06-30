import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'a9d37226-0d4b-42de-8dfe-0bb84bdff1f2';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    const pro1 = () => {
        localStorage.clear();
         window.location.reload();
    }
    
    return (<div className="chats-page">
        <div className="nav-bar">
            <div className="logo-tab">
                Nchat
            </div>
            <div className="logout-tab" onClick={pro1}>
                Log Out
            </div>
        </div>
        <ChatEngine
            height="calc(100vh - 66px)"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            
        /></div>

    );
};

export default App;