import PersonalInfoForm from './PersonalInfoForm';
import Input from './Input';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      Dashboard
      <PersonalInfoForm>
        <Input
          key="full-name"
          id="full-name"
          label="Full Name"
          type="text"
        ></Input>

        <Input
          key="email"
          id="email"
          label="Email"
          type="email"
        ></Input>

        <Input
          key="phone"
          id="phone"
          label="Phone Number"
          type="tel"
        ></Input>

        <Input
          key="address"
          id="address"
          label="Address"
          type="text"
        ></Input>

        <Input
          key="desired-position"
          id="desired-position"
          label="Desired Position"
          type="text"
        ></Input>
      </PersonalInfoForm>
    </div>
  );
}

export default Dashboard;
