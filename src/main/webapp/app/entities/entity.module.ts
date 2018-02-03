import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterElasticSearchSampleRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterElasticSearchSampleCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterElasticSearchSampleLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterElasticSearchSampleDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterElasticSearchSampleTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterElasticSearchSampleEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterElasticSearchSampleJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterElasticSearchSampleJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterElasticSearchSampleRegionMySuffixModule,
        JhipsterElasticSearchSampleCountryMySuffixModule,
        JhipsterElasticSearchSampleLocationMySuffixModule,
        JhipsterElasticSearchSampleDepartmentMySuffixModule,
        JhipsterElasticSearchSampleTaskMySuffixModule,
        JhipsterElasticSearchSampleEmployeeMySuffixModule,
        JhipsterElasticSearchSampleJobMySuffixModule,
        JhipsterElasticSearchSampleJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterElasticSearchSampleEntityModule {}
