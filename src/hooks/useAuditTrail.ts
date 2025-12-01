export function useAuditTrail() {
  return {
    logAction: (action: string) => {
      console.log('Audit Trail:', action);
    },
    hasAccess: (sectionKey: string, user: any) => true,
    getSectionAudit: (sectionKey: string) => `Audit: ${sectionKey} - OK`,
    getRoles: () => ['admin']
  };
}
