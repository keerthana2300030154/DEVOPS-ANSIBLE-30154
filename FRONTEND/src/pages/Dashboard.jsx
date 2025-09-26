import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <Card title="Total Patients">
          <h3 className="text-primary">120</h3>
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Total Doctors">
          <h3 className="text-success">25</h3>
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Appointments Today">
          <h3 className="text-warning">18</h3>
        </Card>
      </div>
    </div>
  );
}
