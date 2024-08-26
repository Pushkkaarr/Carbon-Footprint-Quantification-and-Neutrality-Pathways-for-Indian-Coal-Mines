import React from 'react';
import { useLocation } from 'react-router-dom';

function NeutralityResult() {
  // Use location to get the state or any data passed through navigation if needed
  const location = useLocation();
  const { neutralityGoals } = location.state || {};

  return (
    <div className="p-6 md:p-10 lg:p-20 min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Neutrality Goals Summary
        </h1>
        
        {/* Display the neutrality goals if available */}
        {neutralityGoals ? (
          <div className="space-y-6">
            {/* Offset Strategies */}
            <div className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-[#2B263F] mb-2">Offset Strategies</h2>
              <p>{neutralityGoals.offsetStrategies || 'No data provided'}</p>
            </div>

            {/* Reduction Plans */}
            <div className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-[#2B263F] mb-2">Reduction Plans</h2>
              <p>{neutralityGoals.reductionPlans || 'No data provided'}</p>
            </div>

            {/* Timeline */}
            <div className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-[#2B263F] mb-2">Timeline</h2>
              <p>{neutralityGoals.timeline || 'No data provided'}</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No data available.</p>
        )}

        {/* Button or additional content */}
        <div className="text-center mt-8">
          <a href="/neutrality" className="px-6 py-3 text-white font-bold rounded-lg shadow-md bg-[#66C5CC] hover:bg-[#55B2B6] transition-transform transform hover:scale-105">
            Go Back to Emission Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default NeutralityResult;
