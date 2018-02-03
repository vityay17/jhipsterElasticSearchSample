import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { DepartmentMySuffix } from './department-my-suffix.model';
import { DepartmentMySuffixService } from './department-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-department-my-suffix',
    templateUrl: './department-my-suffix.component.html'
})
export class DepartmentMySuffixComponent implements OnInit, OnDestroy {
departments: DepartmentMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private departmentService: DepartmentMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch = this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ?
            this.activatedRoute.snapshot.params['search'] : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.departmentService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: HttpResponse<DepartmentMySuffix[]>) => this.departments = res.body,
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
       }
        this.departmentService.query().subscribe(
            (res: HttpResponse<DepartmentMySuffix[]>) => {
                this.departments = res.body;
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDepartments();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: DepartmentMySuffix) {
        return item.id;
    }
    registerChangeInDepartments() {
        this.eventSubscriber = this.eventManager.subscribe('departmentListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
