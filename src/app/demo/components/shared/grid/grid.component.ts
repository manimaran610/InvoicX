import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChangeDetectionStrategy, OnChanges } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { GroupedColumnOptions } from '../Models/grouped-column-options';
import { GridColumnOptions } from '../Models/grid-column-options';





@Component({
    selector: 'app-grid',
    standalone: true,
    imports: [CommonModule, ConfirmDialogModule, TableModule, FormsModule],
    providers: [ConfirmationService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {


    @ViewChild('singleSelectionTable', { static: false }) singleSelectionTable: any;

    @Input() title: string = '';
    @Input() isBordered: boolean = false;
    @Input() tableStyle: any = { 'min-width': '50rem' };
    @Input() listOfItems: any[] = [];
    @Input() groupedColumnOptions: GroupedColumnOptions[] = [];
    @Input() gridColumnOptions: GridColumnOptions[] = [];
    @Input() dataKey: any;
    @Input() rows: number = 20;
    @Input() rowsPerPageOptions: number[] = [20, 50, 100];
    @Input() hasradioButton: boolean = false;
    @Input() canEdit: boolean = false;
    @Input() canPreview: boolean = false;
    @Input() canCopy: boolean = false;
    @Input() canDelete: boolean = false;
    @Input() canDownload: boolean = false;
    @Input() hasPagination: boolean = true;
    @Input() hasLazyLoading: boolean = false;
    @Input() totalRecords: number = 0;
    @Input() loadingSpinner: boolean = false;
    @Input() selected: any;
    @Input() hasRetension: boolean = false;
    @Input() hasColumnGroup: boolean = false;
    @Input() isDownloading: boolean = false;
    @Input() isCopying: boolean = false;
    @Input() deleteConfirmDialogEnabled: boolean = false;



    @Input() addNewRow: EventEmitter<any> = new EventEmitter<any>();


    @Output() Save: EventEmitter<any> = new EventEmitter<any>();
    @Output() Cancel: EventEmitter<any> = new EventEmitter<any>();
    @Output() Delete: EventEmitter<any> = new EventEmitter<any>();
    @Output() RadioChanges: EventEmitter<any> = new EventEmitter<any>();
    @Output() LazyLoad: EventEmitter<any> = new EventEmitter<any>();
    @Output() Preview: EventEmitter<any> = new EventEmitter<any>();
    @Output() Download: EventEmitter<any> = new EventEmitter<any>();
    @Output() Copy: EventEmitter<any> = new EventEmitter<any>();



    firstOffset: number = 0;
    @Input() sortField: string | undefined;
    @Input() sortOrder: number = 1;


    selectedRow: any;
    editableRowData: any = {};
    clonedProducts: { [s: string]: any } = {};
    isNewRowInserted: boolean = false;
    currentEventItem: any;

    getRowSpan = () => this.groupedColumnOptions.flatMap(group => group.gridColumnOptions).sort((obj1, obj2) => parseInt(obj1.rowspan!) - parseInt(obj2.rowspan!))[0].rowspan;
    getFilteredGroupColumns = () => this.groupedColumnOptions.flatMap(group => group.gridColumnOptions).filter(option => option.hasTableValue && !option.isStandalone).sort((obj1, obj2) => obj1.orderNo! - obj2.orderNo!)
    getFilteredColumns = () => this.gridColumnOptions.filter(option => option.hasTableValue && !option.isStandalone).sort((obj1, obj2) => obj1.orderNo! - obj2.orderNo!)
    getStandaloneColumns = () => this.groupedColumnOptions.flatMap(group => group.gridColumnOptions).filter(option => option.isStandalone);

    constructor(private confirmationService: ConfirmationService) { }

    public ngOnInit() {
        this.selectedRow = this.selected;
        this.addNewRow.subscribe((e) => {
            if (e == true) {
                this.addNewEditableRow()
            }
        })

    }

    ngOnChanges() {
        console.log('changes detected')


    }
    get $applyStyles(): boolean {
        return true;
    }

    onRadioSelected() { this.RadioChanges.emit(this.selectedRow); }

    onRowSelected(event: any) { }

    onRowPreviewEvent(event: any) { this.Preview.emit(event); }

    onRowDownloadEvent(event: any) {
        this.currentEventItem = event;
        this.Download.emit(event);
    }
    onRowCopyEvent(event: any) {
        this.currentEventItem = event;
        this.Copy.emit(event);
    }


    onLazyLoadEvent(event: any) {
        console.warn(event);
        let queryParams = {
            offset: event.first,
            count: event.rows,
            sort: event.sortField !== undefined ? `${event.sortField}:${event.sortOrder === 1 ? 'asc' : 'desc'}` : '',

        };
        this.LazyLoad.emit(queryParams);
    }

    //Grid row crud operations
    addNewEditableRow() {
        this.editableRowData = {};
        this.editableRowData[this.dataKey] = this.generateRandomId();
        this.listOfItems = [this.editableRowData, ...this.listOfItems];
        this.singleSelectionTable.initRowEdit(this.editableRowData);
    }

    onRowEditInit(rowData: any, index: number) {
        this.singleSelectionTable.initRowEdit(rowData);
        this.clonedProducts[rowData[this.dataKey]] = { ...rowData };
    }

    onRowEditCancel(rowData: any, index: number) {
        this.Cancel.emit(rowData);
        if (this.clonedProducts[rowData[this.dataKey]] != null &&
            this.clonedProducts[rowData[this.dataKey]] !== undefined) {
            this.listOfItems[index] = this.clonedProducts[rowData[this.dataKey]];
        } else {
            this.listOfItems = [...this.listOfItems.filter((e) => e[this.dataKey] !== rowData[this.dataKey])];
        }
        this.singleSelectionTable.cancelRowEdit(rowData);
    }

    onRowEditSave(rowData: any, htmlTableRowElement: any) {
        this.Save.emit(rowData);
        this.singleSelectionTable.saveRowEdit(rowData, htmlTableRowElement);
        delete this.clonedProducts[rowData[this.dataKey]];
    }

    onRowDelete(rowData: any, index: number) {
        if (this.deleteConfirmDialogEnabled) {
            this.confirmationService.confirm({
                message: 'Are you sure that you want to delete?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                acceptButtonStyleClass: 'btn btn-success m-2',
                rejectButtonStyleClass: 'btn btn-danger',
                accept: () => {
                    this.Delete.emit(rowData);
                    this.listOfItems = [...this.listOfItems.filter((e) => e[this.dataKey] !== rowData[this.dataKey])];
                },
                reject: () => { }
            });
        }
        else {

            this.Delete.emit(rowData);
            this.listOfItems = [...this.listOfItems.filter((e) => e[this.dataKey] !== rowData[this.dataKey])];
        }


    }

    private generateRandomId = (): string => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 12; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;

    };

}