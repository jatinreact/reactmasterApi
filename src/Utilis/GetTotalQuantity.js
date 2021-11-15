

export const  totalQuantity = () => {
    const newCardproducts = JSON.parse(localStorage.getItem("cards")) || [];
      let newQuantaty = 0;
      for (let i = 0; i < newCardproducts.length; i++) {
        const element = newCardproducts[i];
        newQuantaty = newQuantaty + element.quantity;
      }
      return newQuantaty
}