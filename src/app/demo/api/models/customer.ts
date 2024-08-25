export interface Customer {
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
    ownerName: string,
    openBalanace: number,
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

export interface Country {
    name?: string;
    code?: string;
}

