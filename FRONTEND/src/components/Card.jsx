export default function Card({ title, children }) {
  return (
    <div className="card shadow-sm mb-4">
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
