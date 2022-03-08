// creates html to be injected into the DOM
export const businessHTML = (bizObj) => {
    return `
        <article class="business-card">
            <h3>${bizObj.companyName}</h3>
            <p>${bizObj.addressFullStreet} <br> ${bizObj.addressCity}, ${bizObj.addressStateCode} ${bizObj.addressZipCode}</p>
            
        </article>
    `
}

export const agentHTML = (bizObj) => {
    return `
        <article class="agent-card">
            <h3>${bizObj.fullName}</h3>
            <p><strong>${bizObj.company}</strong></p>
            <p>${bizObj.phoneNumber}</p>
            
        </article>
    `
}