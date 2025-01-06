import React, {JSX} from 'react';

type ColumnRenderer = (row: Record<string, any>) => JSX.Element;

const columnRenderers: Record<string, ColumnRenderer> = {
    "Référence": (row) => <p>{row?.reference}</p>,
    "Désignation": (row) => <p>{row?.name}</p>,
    "Quantité": (row) => <p className={`${row?.quantity_globale === 0 && "text-red-600"}`}>{row.quantity_globale}</p>,
    "PV TTC -P-": (row) => <p>{row?.prix_vente} dzd</p>,
    "PV TTC -R-": (row) => <p>{row?.prix_vente} dzd</p>,
    "N° bon": (row) => <p>{row?.idBon}</p>,
    "Date bon": (row) => <p>{row?.dateBon}</p>,
    "Entrepot bon": (row) => <p>{row?.entrepot?.name}</p>,
    "Client": (row) => <p>{row?.client?.name || row.name}</p>,
    "Livraison": (row) => <p>{row?.agenceLivraison ? row?.agenceLivraison : "Interne"}</p>,
    "Commercial": (row) => <p>{row?.user?.username}</p>,
    "Validation": (row) => <p className={`text-center border rounded ${row?.confirmed ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.confirmed ? "Validé" : "En attente"}</p>,
    "N° facture": (row) => <p>{row?.codeFacture}</p>,
    "Date facture": (row) => <p>{row?.date_facture}</p>,
    "Bon de livraison associé": (row) => <p>{row?.BonS?.idBon}</p>,
    "Etat de règlement": (row) => <p>{row?.etat_reglement}</p>,
    "Entrepot": (row) => <p>{row?.bonL?.entrepot?.name}</p>,
    "Bon de vente associé": (row) => <p>{row?.bonL?.idBon}</p>,
    "Etat d'acceptation": (row) => <p className={`text-center border rounded ${row?.reception_valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.reception_valide ? "Accepté" : "Non-accepté"}</p>,
    "Etat bon": (row) => <p className={`text-center border rounded ${row?.valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.valide ? "Validé" : "En attente"}</p>,
    "Etat de règlement bon": (row) => <p className={`text-center border rounded ${row?.regler_valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : row?.reintegrated ? "border-blue-900 bg-blue-200 text-blue-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.regler_valide ? "Reglé" : row?.reintegrated ? "New" : "Non-reglé"}</p>,
    "Utilisateur": (row) => <p>{row?.user?.username || row?.name_user}</p>,
    "Type de client": (row) => <p>{row?.categorie_client?.type_desc}</p>,
    "Solde": (row) => <p>{row?.solde} dzd</p>,
    "Etat de validation": (row) => <p className={`text-center border rounded ${row?.valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.valide ? "Validé" : "En attente"}</p>,
    "Documents associés": (row) => (
        <div className="space-x-2">
            <a href={row?.NisDoc}>NIS</a>
            <a href={row?.NifDoc}>NIF</a>
            <a href={row?.AIDoc}>AI</a>
            <a href={row?.RCDoc}>RC</a>
        </div>
    ),
};

export default columnRenderers;