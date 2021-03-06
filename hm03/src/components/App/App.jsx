
import './App.css';
import { Chat } from '../Chat';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { ChatList } from '../ChatList';
import { MessageField } from '../MessageField';


function App() {
    return (
        <>
            <Layout>
                <Header></Header>
                <ChatList />
                <MessageField><Chat /></MessageField>
            </Layout>
        </>
    )
}

export { App };