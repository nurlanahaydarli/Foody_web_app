export function sortDataByCreated<T>(data?: T[]) {
    if(!data?.length) return [];
    const dataCopy = [...data];
    return dataCopy.sort((a: any, b: any) => new Date(b.created).getTime() - new Date(a.created).getTime());
}
