"use client";

export default function PrintButton() {
  return (
    <button
      className="btn btn-sm btn-outline-primary"
      type="button"
      onClick={() => window.print()}
    >
      <i className="bi bi-printer me-1" />Print / Save PDF
    </button>
  );
}
