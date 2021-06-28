import { Button, ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'a9d37226-0d4b-42de-8dfe-0bb84bdff1f2';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (<div>
               <ChatEngine
                height="96vh"
                projectID={projectID}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            /></div>
        
    );
};

export default App;