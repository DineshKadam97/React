function getData(DataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data ID is : ", DataID);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  for (let i = 1; i < 6; i++) {
    await getData(i);
  }
}

getAllData();
