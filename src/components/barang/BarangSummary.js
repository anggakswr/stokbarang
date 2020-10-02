import React from "react";

export default function BarangSummary({ barang }) {
  return (
    <div className="card z-depth-0 barang-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{barang.nama}</span>
        <p>Stok: {barang.stok}</p>
        <p>Posted by {barang.cabang}</p>
        <p className="grey-text">{barang.createdAt.toDate().toDateString()}</p>
      </div>
    </div>
  );
}
