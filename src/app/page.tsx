import AddCompanyButton from './components/add-company-button';
import ClientComponent from './components/client-component';
import ServerComponent from './components/server-component';
import ServerCopyComponent from './components/server-component-copy';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerCopyComponent />
      </ClientComponent>
    </main>
  );
}
