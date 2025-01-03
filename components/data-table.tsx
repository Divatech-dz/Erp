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
                setUserId={setUserId}
                salesUsers={salesUsers}
            />
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
                            {headerColumns?.map((col: { id: string; name: string }) => {
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
                                        cellContent = <p>{row?.entrepot.name}</p>;
                                        break;
                                    case "Client":
                                        cellContent = <p>{row?.client.name}</p>; /* Commands notes and bills page*/
                                        break;
                                    case "Livraison":
                                        cellContent = <p>{row?.agenceLivraison ? row?.agenceLivraison : "Interne"}</p>;
                                        break;
                                    case "Commercial":
                                        cellContent = <p>{row?.user.username}</p>;
                                        break;
                                    case "Validation":
                                        cellContent = <p className={`text-center border rounded ${row?.confirmed ? "border-emerald-900 bg-emerald-400" : "border-red-900 bg-red-500"}`}>{row?.confirmed ? "Validé" : "En attente"}</p>;
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
                                    onClick={() => openModalWithContent("table")}
                                />
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
                })}
            />

            <ReusableSheet
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={contentType === "table" ? "Invoice Details" : ""}
                contentType={contentType}
                contentProps={contentType === "table" ? {tableData} : {}}
            />
        </>
    );
};