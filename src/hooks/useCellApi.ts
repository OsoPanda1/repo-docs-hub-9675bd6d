export function useCellApi() {
  return {
    fetchCell: async (cellKey: string) => {
      console.log('Fetching cell:', cellKey);
      return { success: true };
    }
  };
}
