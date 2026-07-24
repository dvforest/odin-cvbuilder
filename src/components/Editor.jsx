import PersonalInfoForm from './PersonalInfoForm';
import Input from './Input';
import '../styles/editor.css';

function Editor({ formData, onInputChange }) {
  return (
    <div className="editor">
      Dashboard
      <PersonalInfoForm>
        <Input
          key="full-name"
          id="full-name"
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={(e) => onInputChange('fullName', e.target.value)}
        ></Input>

        <Input
          key="email"
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
        ></Input>

        <Input
          key="phone"
          id="phone"
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
        ></Input>

        <Input
          key="address"
          id="address"
          label="Address"
          type="text"
          value={formData.address}
          onChange={(e) => onInputChange('address', e.target.value)}
        ></Input>

        <Input
          key="desired-position"
          id="desired-position"
          label="Desired Position"
          type="text"
          value={formData.desiredPosition}
          onChange={(e) => onInputChange('desiredPosition', e.target.value)}
        ></Input>
      </PersonalInfoForm>
    </div>
  );
}

export default Editor;
