export function useMultifactor() {
  return {
    isEnabled: false,
    enable: () => console.log('MFA enabled'),
    checkMF: (userId?: string) => true
  };
}
