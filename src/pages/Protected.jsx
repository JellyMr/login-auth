const Protected = ({ user }) => (
    <div>
      <h1>Bienvenid@, {user?.username}!</h1>
      
      <p>Email: {user?.email}</p>
      <p>First Name: {user?.firstName}</p>
      <p>Last Name: {user?.lastName}</p>
      <p>Gender: {user?.gender}</p>

    </div>
  );
  
  export default Protected;
  