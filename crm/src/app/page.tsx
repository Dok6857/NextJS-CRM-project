import AddCompanyButton from './components/add-company-button';
import Colors from './components/colors';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <Colors />
    </main>
  );
}
