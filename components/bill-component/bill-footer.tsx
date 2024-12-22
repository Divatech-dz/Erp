import React from 'react';
import { Button } from '../ui/button';

export const BillFooter = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4  p-6">
      <div className="w-full  bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">
              Total HT [Sans Livraison]
            </p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">
              Remise HT [Sans Livraison]{' '}
            </p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">
              Frais Livraison [ INTERNE ]
            </p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-medium">Total TTC</p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
        </div>
      </div>

      <div className="w-full  bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">Total HT</p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">Remise HT</p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">Sous Total HT</p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">Sous Total HT</p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-gray-700 font-medium">Total TTC</p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-medium">Frais Livraison</p>
            <span className="text-gray-900 font-semibold">0,00 DZ</span>
          </div>
        </div>
      </div>

      <div className="w-full  bg-white rounded-lg  overflow-hidden">
        <div className="p-6 flex justify-end items-end gap-2">
          <p className="text-lg font-semibold text-gray-800">Net À Payer</p>
          <span className="text-lg font-bold text-blue-600">0,00 DZ</span>
        </div>
      </div>
      <div className="w-full  bg-white rounded-lg  overflow-hidden">
        <div className=" flex justify-end items-end gap-2">
          <Button className="border-bankGradient bg-black-1 rounded-lg hover:bg-gray-200 active:bg-gray-300 text-white">
            Valider le Bon & imprime
          </Button>
        </div>
      </div>
    </div>
  );
};
