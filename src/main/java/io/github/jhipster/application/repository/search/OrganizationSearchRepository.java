package io.github.jhipster.application.repository.search;

import io.github.jhipster.application.domain.Organization;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Organization entity.
 */
public interface OrganizationSearchRepository extends ElasticsearchRepository<Organization, Long> {
}
