export function fLN(n1: any, n2: any) {
   if (parseInt(n1) > parseInt(n2)) {
      return 'rgb(140, 255, 140)'
   } else if (parseInt(n2) > parseInt(n1)) {
      return 'rgb(255, 140, 140)'
   } else if (parseInt(n2) === parseInt(n1))  {
      return 'rgb(249, 249, 249)'
   }
   return 'rgba(0, 0, 0, 0.4)'
}
 