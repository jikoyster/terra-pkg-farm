export default function FarmCard({ farm }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3>{farm.name}</h3>
      <p>Region: {farm.region}</p>
      <p>Hectares: {farm.hectares}</p>
      <p>Yield: {farm.yield}</p>
    </div>
  );
}