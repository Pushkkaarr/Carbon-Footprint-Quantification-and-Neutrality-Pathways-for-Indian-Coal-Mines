import React, { useState } from 'react';

function EmissionForm() {
  const [formData, setFormData] = useState({
    fuelConsumption: { equipmentType: '', fuelType: '', quantity: '', emissionFactor: '' },
    electricityUsage: { equipmentType: '', powerConsumed: '', emissionFactor: '' },
    humanActivities: { activityType: '', hours: '', emissionFactor: '' },
    vehicleUsage: { vehicleType: '', hours: '', fuelType: '', emissionFactor: '' },
    explosions: { explosionType: '', frequency: '', emissionFactor: '' }
  });

  const [results, setResults] = useState(null);
  const [showNeutralityButton, setShowNeutralityButton] = useState(false);

  const handleChange = (e, category) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the formData and calculate the results.
    const summary = {
      fuelConsumption: `Equipment Type: ${formData.fuelConsumption.equipmentType}, Fuel Type: ${formData.fuelConsumption.fuelType}, Quantity: ${formData.fuelConsumption.quantity}, Emission Factor: ${formData.fuelConsumption.emissionFactor}`,
      electricityUsage: `Equipment Type: ${formData.electricityUsage.equipmentType}, Power Consumed: ${formData.electricityUsage.powerConsumed}, Emission Factor: ${formData.electricityUsage.emissionFactor}`,
      humanActivities: `Activity Type: ${formData.humanActivities.activityType}, Hours: ${formData.humanActivities.hours}, Emission Factor: ${formData.humanActivities.emissionFactor}`,
      vehicleUsage: `Vehicle Type: ${formData.vehicleUsage.vehicleType}, Hours: ${formData.vehicleUsage.hours}, Fuel Type: ${formData.vehicleUsage.fuelType}, Emission Factor: ${formData.vehicleUsage.emissionFactor}`,
      explosions: `Explosion Type: ${formData.explosions.explosionType}, Frequency: ${formData.explosions.frequency}, Emission Factor: ${formData.explosions.emissionFactor}`
    };

    setResults(summary);
    setShowNeutralityButton(true);
  };

  const sectionStyle = "bg-[#342F49] p-6 rounded-lg shadow-lg border border-[#66C5CC]";
  const titleStyle = "text-2xl font-semibold text-[#66C5CC] mb-4";
  const inputStyle = "p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black";
  const buttonStyle = "px-6 py-3 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105";
  const submitButtonStyle = "bg-[#66C5CC] hover:bg-[#55B2B6] focus:outline-none focus:ring-2 focus:ring-[#55B2B6]";
  const neutralityButtonStyle = "bg-[#55B2B6] hover:bg-[#66C5CC] focus:outline-none focus:ring-2 focus:ring-[#66C5CC]";

  return (
    <div className="p-6 md:p-10 lg:p-20 min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B263F] to-[#4B5563] animate-gradient overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Carbon Emissions Tracker</h1>
  
      <form className="space-y-8 w-full max-w-5xl" onSubmit={handleSubmit}>
        {/* Fuel Consumption */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Fuel Consumption</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="equipmentType"
              value={formData.fuelConsumption.equipmentType}
              onChange={(e) => handleChange(e, 'fuelConsumption')}
              placeholder="Equipment Type"
              className={inputStyle}
            />
            <input
              type="text"
              name="fuelType"
              value={formData.fuelConsumption.fuelType}
              onChange={(e) => handleChange(e, 'fuelConsumption')}
              placeholder="Fuel Type"
              className={inputStyle}
            />
            <input
              type="number"
              name="quantity"
              value={formData.fuelConsumption.quantity}
              onChange={(e) => handleChange(e, 'fuelConsumption')}
              placeholder="Quantity"
              className={inputStyle}
            />
            <input
              type="number"
              name="emissionFactor"
              value={formData.fuelConsumption.emissionFactor}
              onChange={(e) => handleChange(e, 'fuelConsumption')}
              placeholder="Emission Factor"
              className={inputStyle}
            />
          </div>
        </div>

        {/* Electricity Usage */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Electricity Usage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="equipmentType"
              value={formData.electricityUsage.equipmentType}
              onChange={(e) => handleChange(e, 'electricityUsage')}
              placeholder="Equipment Type"
              className={inputStyle}
            />
            <input
              type="number"
              name="powerConsumed"
              value={formData.electricityUsage.powerConsumed}
              onChange={(e) => handleChange(e, 'electricityUsage')}
              placeholder="Power Consumed"
              className={inputStyle}
            />
            <input
              type="number"
              name="emissionFactor"
              value={formData.electricityUsage.emissionFactor}
              onChange={(e) => handleChange(e, 'electricityUsage')}
              placeholder="Emission Factor"
              className={inputStyle}
            />
          </div>
        </div>

        {/* Human Activities */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Human Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="activityType"
              value={formData.humanActivities.activityType}
              onChange={(e) => handleChange(e, 'humanActivities')}
              placeholder="Activity Type"
              className={inputStyle}
            />
            <input
              type="number"
              name="hours"
              value={formData.humanActivities.hours}
              onChange={(e) => handleChange(e, 'humanActivities')}
              placeholder="Hours"
              className={inputStyle}
            />
            <input
              type="number"
              name="emissionFactor"
              value={formData.humanActivities.emissionFactor}
              onChange={(e) => handleChange(e, 'humanActivities')}
              placeholder="Emission Factor"
              className={inputStyle}
            />
          </div>
        </div>

        {/* Vehicle Usage */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Vehicle Usage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleUsage.vehicleType}
              onChange={(e) => handleChange(e, 'vehicleUsage')}
              placeholder="Vehicle Type"
              className={inputStyle}
            />
            <input
              type="number"
              name="hours"
              value={formData.vehicleUsage.hours}
              onChange={(e) => handleChange(e, 'vehicleUsage')}
              placeholder="Hours"
              className={inputStyle}
            />
            <input
              type="text"
              name="fuelType"
              value={formData.vehicleUsage.fuelType}
              onChange={(e) => handleChange(e, 'vehicleUsage')}
              placeholder="Fuel Type"
              className={inputStyle}
            />
            <input
              type="number"
              name="emissionFactor"
              value={formData.vehicleUsage.emissionFactor}
              onChange={(e) => handleChange(e, 'vehicleUsage')}
              placeholder="Emission Factor"
              className={inputStyle}
            />
          </div>
        </div>

        {/* Explosions/Bombings */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Explosions/Bombings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="explosionType"
              value={formData.explosions.explosionType}
              onChange={(e) => handleChange(e, 'explosions')}
              placeholder="Explosion Type"
              className={inputStyle}
            />
            <input
              type="number"
              name="frequency"
              value={formData.explosions.frequency}
              onChange={(e) => handleChange(e, 'explosions')}
              placeholder="Frequency"
              className={inputStyle}
            />
            <input
              type="number"
              name="emissionFactor"
              value={formData.explosions.emissionFactor}
              onChange={(e) => handleChange(e, 'explosions')}
              placeholder="Emission Factor"
              className={inputStyle}
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className={`${buttonStyle} ${submitButtonStyle}`}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Results Display */}
      {results && (
        <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC] w-full max-w-5xl">
          <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Results</h2>
          <pre className="text-lg text-white">{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}

      {/* Neutrality Button */}
      {showNeutralityButton && (
        <div className="mt-8 text-center">
          <button
            className={`${buttonStyle} ${neutralityButtonStyle}`}
          >
            Neutrality
          </button>
        </div>
      )}
    </div>
  );
}

export default EmissionForm;
