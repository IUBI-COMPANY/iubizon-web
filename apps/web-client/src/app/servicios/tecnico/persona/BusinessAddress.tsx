import React from "react";

export const BusinessAddress = () => {
  return (
    <div className="w-full my-6">
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h3 className="text-lg font-semibold text-secondary mb-3">
          Información del local
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Dirección */}
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 w-4 h-4 mt-0.5">
              <svg
                className="w-4 h-4 text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-secondary text-sm mb-1">
                Dirección:
              </p>
              <a
                href="https://www.google.com/maps/place/Pje.+los+Jazmines+121,+Chorrillos+15066/@-12.1813147,-77.0187789,20z/data=!3m1!4b1!4m6!3m5!1s0x9105b77bc923c7dd:0xc9a1cab224d7580f!8m2!3d-12.1813147!4d-77.0187789!16s%2Fg%2F11c5p8y8qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 cursor-pointer text-sm leading-tight"
              >
                Calle las Acacias, Pje. los Jazmines 181, Chorrillos
              </a>
              <p className="text-xs text-gray-600 mt-0.5">Ver en Google Maps</p>
            </div>
          </div>

          {/* Horarios */}
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 w-4 h-4 mt-0.5">
              <svg
                className="w-4 h-4 text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-secondary text-sm mb-1">
                Horarios:
              </p>
              <div className="space-y-0.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">L-V:</span>
                  <span className="font-medium text-green-600">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sáb:</span>
                  <span className="font-medium text-secondary">
                    9:00 AM - 12:00 PM - Previa cita
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Dom:</span>
                  <span className="font-medium text-red-600">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa más compacto */}
        <div className="border-t border-gray-200 pt-3">
          <p className="text-xs text-gray-600 mb-2">Ubicación:</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.71337159212857!2d-77.01877893930197!3d-12.181314674423286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b77bc923c7dd%3A0xc9a1cab224d7580f!2sPje.%20los%20Jazmines%20121%2C%20Chorrillos%2015066!5e0!3m2!1ses!2spe!4v1758727743550!5m2!1ses!2spe"
            width="600"
            height="150"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-md border border-gray-200"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
