function getCurrentYear() {
<<<<<<< HEAD
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
  return budget;
}
=======
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
      [`income-${getCurrentYear()}`]: income,
      [`gdp-${getCurrentYear()}`]: gdp,
      [`capita-${getCurrentYear()}`]: capita,
    };
  
    return budget;
  }
>>>>>>> 489b7fbf7bcebca55c1f8c3940a3f25fd1a2e049
