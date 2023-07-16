interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Employee'],
  customerRoles: ['Guest'],
  tenantRoles: ['Employee'],
  tenantName: 'Player',
  applicationName: 'RRC SPL Bowling ',
  addOns: ['notifications', 'file'],
};
