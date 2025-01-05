'use client'

import React, {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {Button} from "./ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {PaginationTable, ReusableSheet, TopContent} from "./table-components";
import {icons} from "@/constants/icons";
import {TableProps} from "@/types";
import {ColorRing} from "react-loader-spinner";

const getCellContent = (row: Record<string, any>, colId: string) =>
    row[colId] !== "" ? row[colId] : "N/A";

export const DataTable = ({
                              columnNames,
                              columnData,
                              currentPage,
                              setCurrentPage,
                              totalPages,
                              setCategory,
                              setSearch,
                              categories,
                              startDate,
                              setStartDate,
                              endDate,
                              setEndDate,
                              setUserId,
                              salesUsers,
                              isLoading,
                              setClientType
                          }: TableProps) => {
    const [visibleColumns, setVisibleColumns] = useState(
        new Set<string>(columnNames?.map((col) => col.id))
    );
    const [tableData, setTableData] = useState<Record<string, any>[]>(columnData ?? []);
    const [initialData, setInitialData] = useState(columnData);
    const [openModal, setOpenModal] = React.useState(false);
    const [contentType, setContentType] = React.useState<string>("table");
    const [sortedButton, setSortedButton] = useState<{
        column: string;
        ascending: boolean;
    }>({
        column: "",
        ascending: true,
    });
    const [invoiceDetails, setInvoiceDetails] = useState<Record<string, any>>({});

    useEffect(() => {
        setTableData(columnData ?? []);
        setInitialData(columnData);
    }, [columnData]);

    const headerColumns = useMemo(() => {
        return columnNames?.filter((column) => visibleColumns.has(column.id));
    }, [columnNames, visibleColumns]);

    const handleSort = (columnKey: string) => {
        const ascending = sortedButton.column === columnKey ? !sortedButton.ascending : true;
        setSortedButton({column: columnKey, ascending});

        setTableData((prevData) =>
            [...prevData]?.sort((a, b) => {
                const firstValue = a[columnKey];
                const secondValue = b[columnKey];

                let comparisonResult: number;
                if (firstValue < secondValue) comparisonResult = -1;
                else if (firstValue > secondValue) comparisonResult = 1;
                else comparisonResult = 0;

                return ascending ? comparisonResult : -comparisonResult;
            })
        );
    };

    const openModalWithContent = (type: string) => {
        setContentType(type);
        setOpenModal(true);
    };

    return (
        <>
            <TopContent
                columnNames={columnNames}
                setVisibleColumns={setVisibleColumns}
                visibleColumns={visibleColumns}
                setSearch={setSearch}
                setCategory={setCategory}
                categories={categories}
                setCurrentPage={setCurrentPage}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
                setClientType={setClientType}
                setUserId={setUserId}
                salesUsers={salesUsers}
            />
            {isLoading && (
                <div className="h-screen flex flex-col justify-center items-center gqp-10">
                    <h1 className="text-3xl text-center text-gray-400"> Veuillez patienter </h1>
                    <ColorRing
                        visible={true}
                        height="140"
                        width="140"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>
            )}

            {tableData?.length === 0 && !isLoading ? (
                <div className="h-screen flex flex-col justify-center items-center">
                    <p className="text-5xl text-center text-gray-500">Aucune donnée trouvée</p>
                    <p className="text-xl text-center text-gray-400 mt-4">Veuillez vérifier votre recherche</p>
                </div>
            ) : (
                <div className={`${isLoading && "hidden"}`}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {headerColumns?.map(({id, name, sort}) => (
                                    <TableHead key={id}>
                                    {sort ? (
                                        <Button variant="ghost" onClick={() => handleSort(id.toString())}>
                                            {name}
                                            <Image src={icons.Trier} alt="Trier" width={20} height={20}/>
                                        </Button>
                                    ) : (
                                        name
                                    )}
                                </TableHead>
                            ))}
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {tableData?.map((row) => (
                            <TableRow key={row.id} className="hover:bg-gray-50">
                                {headerColumns?.map((col: { id: string; name: string; }) => {
                                    let cellContent;
                                    switch (col?.name) {
                                        /* Products page*/
                                        case "Référence":
                                            cellContent = <p>{row?.reference}</p>;
                                            break;
                                        case "Désignation":
                                            cellContent = <p>{row?.name}</p>;
                                            break;
                                        case "Quantité":
                                            cellContent =
                                                <p className={`${row?.quantity_globale === 0 && "text-red-600"}`}>{row.quantity_globale}</p>;
                                            break;
                                        case "PV TTC -P-":
                                            cellContent = <p>{row?.prix_vente} dzd</p>;
                                            break;
                                        case "PV TTC - R -":
                                            cellContent = <p>{row?.prix_vente} dzd</p>;
                                            break;
                                        /* Commands notes page*/
                                        case "N° bon":
                                            cellContent = <p>{row?.idBon}</p>;
                                            break;
                                        case "Date bon":
                                            cellContent = <p>{row?.dateBon}</p>;
                                            break;
                                        case "Entrepot bon":
                                            cellContent = <p>{row?.entrepot?.name}</p>;
                                            break;
                                        case "Client":
                                            cellContent = <p>{row?.client?.name || row.name}</p> ; /* Commands notes and bills page*/
                                            break;
                                        case "Livraison":
                                            cellContent =
                                                <p>{row?.agenceLivraison ? row?.agenceLivraison : "Interne"}</p>;
                                            break;
                                        case "Commercial":
                                            cellContent = <p>{row?.user?.username}</p>;
                                            break;
                                        case "Validation":
                                            cellContent =
                                                <p className={`text-center border rounded ${row?.confirmed ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.confirmed ? "Validé" : "En attente"}</p>;
                                            break;
                                        /* Bills page*/
                                        case "N° facture":
                                            cellContent = <p>{row?.codeFacture}</p>;
                                            break;
                                        case "Date facture":
                                            cellContent = <p>{row?.date_facture}</p>;
                                            break;
                                        case "Bon de livraison associé":
                                            cellContent = <p>{row?.BonS?.idBon}</p>;
                                            break;
                                        case "Etat de règlement":
                                            cellContent = <p>{row?.etat_reglement}</p>;
                                            break;
                                        /* Return notes page */
                                        case "Entrepot":
                                            cellContent = <p>{row?.bonL?.entrepot?.name}</p>;
                                            break;
                                        case "Bon de vente associé":
                                            cellContent = <p>{row?.bonL?.idBon}</p>;
                                            break;
                                        case "Etat d'acceptation":
                                            cellContent =
                                                <p className={`text-center border rounded ${row?.reception_valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.reception_valide ? "Accepté" : "Non-accepté"}</p>;
                                            break;
                                        case "Etat bon":
                                            cellContent =
                                                <p className={`text-center border rounded ${row?.valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.valide ? "Validé" : "En attente"}</p>;
                                            break;
                                        case "Etat de règlement bon":
                                            cellContent =
                                                <p className={`text-center border rounded ${row?.regler_valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : row?.reintegrated ? "border-blue-900 bg-blue-200 text-blue-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.regler_valide ? "Reglé" : row?.reintegrated ? "New" : "Non-reglé"}</p>;
                                            break;
                                        case "Utilisateur":
                                            cellContent = <p>{row?.user?.username}</p>;
                                            break;
                                        /* Clients page */
                                        case "Type de client":
                                            cellContent = <p>{row?.categorie_client?.type_desc}</p>;
                                            break;
                                        case "Solde":
                                            cellContent = <p>{row?.solde} dzd</p>;
                                            break;
                                        case "Etat de validation":
                                            cellContent = <p className={`text-center border rounded ${row?.valide ? "border-emerald-900 bg-emerald-200 text-emerald-900" : "border-red-900 bg-red-200 text-red-900"}`}>{row?.valide ? "Validé" : "En attente"}</p>;
                                            break;
                                        case "Documents associés":
                                            cellContent = <div className="space-x-2">
                                                <a href={row?.NisDoc}>NIS</a>
                                                <a href={row?.NifDoc}>NIF</a>
                                                <a href={row?.AIDoc}>AI</a>
                                                <a href={row?.RCDoc}>RC</a>
                                            </div>
                                            break;
                                        default:
                                            cellContent = <p>{getCellContent(row, col?.id)}</p>;
                                            break;
                                    }
                                    return (
                                        <TableCell key={`${row?.id}-${col?.id}`}>
                                            {cellContent}
                                        </TableCell>
                                    );
                                })}
                                <TableCell className="text-center flex items-center gap-1">
                                    <Image
                                        src={icons.ArrowDown}
                                        alt="Visible"
                                        height={20}
                                        width={20}
                                        onClick={() => {
                                            openModalWithContent("table");
                                            setInvoiceDetails(row);
                                        }}/>
                                    <Image src={icons.Edit} alt="Edit" height={20} width={20}/>
                                    <Image src={icons.Trash} alt="Trash" height={20} width={20}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <PaginationTable
                    totalPages={totalPages ?? 0}
                    currentPage={currentPage ?? 1}
                    setCurrentPage={setCurrentPage ?? (() => {
                    })}/>

                <ReusableSheet
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    title={contentType === "table" ? `Détail du bon ${invoiceDetails.idBon}` : ""}
                    contentType={contentType}
                    contentProps={contentType === "table" ? {tableData} : {}}
                    invoiceDetails={invoiceDetails}/></div>
            )}
        </>
    )
        ;
};