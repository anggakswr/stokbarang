import React from "react";
import BarangSummary from "./BarangSummary";
import { Link } from "react-router-dom";

export default function BarangList({ barangs }) {
  return (
    <div className="barang-list section">
      {barangs &&
        barangs.map((barang) => (
          <Link to={`/barang/${barang.id}`} key={barang.id}>
            <BarangSummary barang={barang} />
          </Link>
        ))}
    </div>
  );
}
