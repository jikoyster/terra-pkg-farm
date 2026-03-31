import useFarms from "../hooks/useFarms";
import FarmCard from "./FarmCard";

export default function FarmList() {
  const { farms, loading } = useFarms();

  if (loading) return <p>Loading farms...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {farms.map((farm) => (
        <FarmCard key={farm.id} farm={farm} />
      ))}
    </div>
  );
}