import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";


export const getEmployee = async ({ queryKey }: { queryKey: [number, string, string, string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const startDate = queryKey[2];
    const endDate = queryKey[3];

    try {
        const { data } = await axiosInstance.get("/gestionRH/Salarie/", {
            params: {
                page: page,
                search: search,
                start_date: startDate,
                end_date: endDate,
            },
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getContrat = async ({ queryKey }: { queryKey: [number, string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];

    try {
        const { data } = await axiosInstance.get("/gestionRH/Contrat/", {
            params: {
                page: page,
                search: search,
            },
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getReglementCompte = async ({ queryKey }: { queryKey: [number, string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];

    try {
        const { data } = await axiosInstance.get("/gestionRH/ReglementCompte/", {
            params: {
                page: page,
                search: search,
            },
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAbsence = async ({ queryKey }: { queryKey: [number, string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];

    try {
        const { data } = await axiosInstance.get("/gestionRH/Absence/", {
            params: {
                page: page,
                search: search,
            },
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getConge = async ({ queryKey }: { queryKey: [number, string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];

    try {
        const { data } = await axiosInstance.get("/gestionRH/Conge/", {
            params: {
                page: page,
                search: search,
            },
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getPointage = async ({ queryKey }: { queryKey: [number, string, string, string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const startDate = queryKey[2];
    const endDate = queryKey[3];

    try {
        const { data } = await axiosInstance.get("/gestionRH/Pointage/", {
            params: {
                page: page,
                search: search,
                start_date: startDate,
                end_date: endDate,
            },
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}