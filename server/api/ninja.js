export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = getQuery(event)

    // // hande post data
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_eXaWV3Ra93RYoPTFY0iCNNr6C5kaasKghunY3MO1')

    return data
})