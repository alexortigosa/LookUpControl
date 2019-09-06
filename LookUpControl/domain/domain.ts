const filter = '@filter@';


export async function retriveRecords(fetchXml: string, input: string = '') : Promise<any> {
    const parser = new DOMParser();
    const fetchReplaced = fetchXml.replace(filter,input);
    const entityName = parser.parseFromString(fetchXml.replace(filter,input),'text/xml').getElementsByTagName('entity')[0].getAttribute('name');
    const data = await Xrm.WebApi.retrieveMultipleRecords(entityName !== null ? entityName : 'notFound',`?fetchXml=${encodeURIComponent(fetchReplaced)}`);
    return data.entities;
}