export function fLN(n1: any, n2:any) {
   if (parseInt(n1) > parseInt(n2)) {
      return 'rgb(21, 167, 21)'
   } else if (parseInt(n2) > parseInt(n1)) {
      return 'rgb(255, 65, 65)'
   }
   return 'rgba(0, 0, 0, 0.4)'
}
 