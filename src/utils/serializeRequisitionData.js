const hashMap = ['_id', 'requisitionNumber', 'dateReceivingRequisition', 'companyName', 'nameOfCarrier', 'phoneCarrier', 'atiCode', 'comments']

export const serializeRequisition = (value) => {
  return value.reduce((acc, prev) => {
    const result = Object.entries(prev).reduce((acc, [key, value]) => {
      const idx = hashMap.indexOf(key);
      acc[idx] = [key, value];
      return acc;
    }, [])
    acc.push(result);
    return acc;
  },[])
}
