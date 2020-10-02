export const createBarang = (barang) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call
    const firestore = getFirestore();
    const cabang = getState().firebaseReducer.profile.cabang;
    const userId = getState().firebaseReducer.auth.uid;

    firestore
      .collection("barangs")
      .add({
        ...barang,
        cabang,
        cabangId: userId,
        createdAt: new Date(),
      })
      .then(() => {
        // and then dispatch
        dispatch({ type: "CREATE_BARANG", barang });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_BARANG_ERROR", err });
      });
  };
};
