import '../styles/cv.css';

function CV({ data }) {
  return (
    <div className="cv">
      <div>{data.fullName}</div>
      <div>{data.email}</div>
      <div>{data.phone}</div>
      <div>{data.address}</div>
      <div>{data.desiredPosition}</div>
    </div>
  );
}

export default CV;
