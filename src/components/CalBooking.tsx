"use client";

import { useEffect } from "react";

// Configure your Cal.com username here
const CAL_USERNAME = "nickheymann";

export default function CalBooking() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-[600px]">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-semibold">Termin auswählen</h3>
        <p className="text-gray-600 text-sm mt-1">
          Wähle einen passenden Zeitpunkt für unser Gespräch
        </p>
      </div>

      {/* Cal.com Inline Embed */}
      <div
        className="cal-embed"
        data-cal-link={`${CAL_USERNAME}/erstgespraech`}
        data-cal-config='{"layout":"month_view","theme":"light"}'
        style={{ width: "100%", height: "100%", minHeight: "500px" }}
      >
        {/* Fallback while loading */}
        <div className="flex items-center justify-center h-[500px]">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-[#1f1f23] border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-500">Kalender wird geladen...</p>
            <a
              href={`https://cal.com/${CAL_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1f1f23] underline mt-2 inline-block"
            >
              Direkt auf Cal.com öffnen
            </a>
          </div>
        </div>
      </div>

      {/* Alternative: Direct Link Buttons */}
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <p className="text-sm text-gray-600 mb-4">
          Oder wähle direkt einen Termintyp:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://cal.com/${CAL_USERNAME}/erstgespraech`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Kostenloses Erstgespräch (30 Min.)
          </a>
          <a
            href={`https://cal.com/${CAL_USERNAME}/beratung`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#1f1f23] text-white rounded-lg text-sm font-medium hover:bg-[#2a2a30] transition-colors"
          >
            1:1 Beratung – 150€ (60 Min.)
          </a>
        </div>
      </div>
    </div>
  );
}
