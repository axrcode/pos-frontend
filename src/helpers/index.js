export const formatMoney = price => {
   return price.toLocaleString('es-GT', {
      style: 'currency',
      currency: 'GTQ'
   })
}