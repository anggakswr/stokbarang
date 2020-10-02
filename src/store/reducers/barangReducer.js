const initState = {
  barangs: [
    { id: 1, nama: "Beras Raja Lele", stok: 20 },
    { id: 2, nama: "Gulaku", stok: 15 },
    { id: 3, nama: "Minyak Goreng", stok: 50 },
  ],
};

const barangReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_BARANG":
      console.log("created project", action.barang);
      return state;
    case "CREATE_BARANG_ERROR":
      console.log("created project error", action.err);
      return state;
    default:
      return state;
  }
};

export default barangReducer;
