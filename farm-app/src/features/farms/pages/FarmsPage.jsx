import FarmList from "../components/FarmList";
import FarmForm from "../components/FarmForm";

export default function FarmsPage() {
  return (
    <div>
      <h1>Farms</h1>
      <FarmForm />
      <FarmList />
    </div>
  );
}