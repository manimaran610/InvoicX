interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    stockType?: string;
    inventoryStatus?: InventoryStatus;
    category?: string;
    image?: string;
}