export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
      <span className="navbar-brand mb-0 h1">Health Record System</span>
      <div className="ms-auto d-flex align-items-center">
        <span className="me-3">Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff"
          alt="profile"
          className="rounded-circle"
          style={{ width: '40px', height: '40px' }}
        />
      </div>
    </header>
  );
}
