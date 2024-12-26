import React from 'react';

function Page() {
    return (
        <section>
            <h1 className="text-4xl font-bold p-2">Bons de sortie</h1>
            <div className="flex justify-between px-4">
                <div>
                    <input type="text" placeholder="Chercher bon de sortie"/>
                    <input type="date"/>
                </div>
                <button>
                    Ajouter un bon de sortie
                </button>
            </div>
            <table className="w-full">
                <thead>
                <tr>
                    <th>Numéro</th>
                    <th>Date</th>
                    <th>Client</th>
                    <th>Produits</th>
                    <th>Prix unitaire</th>
                    <th>Quantité</th>
                    <th>Prix total</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>12/12/2021</td>
                    <td>BS-001</td>
                    <td>Client 1</td>
                    <td>Produit 1</td>
                    <td>10</td>
                    <td>10</td>
                    <td>100</td>
                    <td className="flex justify-evenly ">
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Page;