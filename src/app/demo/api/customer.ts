export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    activity?: number;
    representative?: Representative;
}
export interface Customers {
    name: string,
    street1: string,
    street2: string,
    city: string,
    state: string,
    phone: string,
    cell: string,
    tin: string,
    GST: string,
    id: number,
    code: number,
    ownername: string,
    OpenBalanace: number,
    pincode:string
}

export interface CityStates {
    districtName: string;
    code: string;
    pincode: number;
    stateName: string;
}
export interface States{
    name:string;
    code:string;
}

