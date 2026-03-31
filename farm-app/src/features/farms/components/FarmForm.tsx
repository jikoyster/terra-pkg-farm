import { useState } from "react";
import { createFarm } from "../services/farmService";

export default function FarmForm() {
  const [form, setForm] = useState({
    name: "",
    region: "",
    hectares: "",
    yield: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFarm(form);
    alert("Farm created!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" placeholder="Farm Name" onChange={handleChange} />
      <input name="region" placeholder="Region" onChange={handleChange} />
      <input name="hectares" placeholder="Hectares" onChange={handleChange} />
      <input name="yield" placeholder="Yield" onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
}