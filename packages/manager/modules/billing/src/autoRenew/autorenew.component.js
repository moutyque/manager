import controller from './autorenew.controller';
import template from './autorenew.html';

export default {
  bindings: {
    activationLink: '<',
    agreementsLink: '<',
    billingServices: '<',
    canDisableAllDomains: '<',
    currentActiveLink: '<',
    currentUser: '<',
    defaultPaymentMean: '<',
    disableAutorenewForDomains: '<',
    disableBulkAutorenew: '<',
    enableBulkAutorenew: '<',
    filters: '<',
    getServices: '<',
    goToAutorenew: '<',
    hasAutoRenew: '<',
    homeLink: '<',
    isAutorenewManagementAvailable: '<',
    isEnterpriseCustomer: '<',
    nicBilling: '<',
    nicRenew: '<',
    nics: '<',
    offset: '<',
    onListParamChanges: '<',
    pageNumber: '<',
    pageSize: '<',
    searchText: '<',
    selectedType: '<',
    services: '<',
    serviceTypes: '<',
    sort: '<',
    sshLink: '<',
    guides: '<',
    trackClick: '<',
  },
  controller,
  template,
};
