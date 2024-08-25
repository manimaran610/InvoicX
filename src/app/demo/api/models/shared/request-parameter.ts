export class RequestParameter {
    offset: number = 0;
    count: number = 100;
    filter: string = '';
    sort: string = '';
    optionalParams: { param: string, value: string | number | boolean }[] = []
}
