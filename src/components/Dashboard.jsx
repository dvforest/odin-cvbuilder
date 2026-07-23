import PersonalInfoForm from "./PersonalInfoForm";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      Dashboard
      <PersonalInfoForm />
      <PersonalInfoForm />
      <PersonalInfoForm />
      <PersonalInfoForm />
    </div>
  );
}

export default Dashboard;
