import { AuthProvider } from './context/AuthContext.jsx';
import PageRoutes from './Routing/PageRoutes.jsx';
// import { BrowserRouter } from "react-router";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router";
// import PageRoutes from "./Routing/PageRoutes";
import TestAuth from './TestAuth.jsx';

function App() {

  // const { role, currentUser } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (currentUser && role === "faculty") {
  //     // push to faculty dashboard when a faculty logs in
  //     navigate("/faculty/dashboard", { replace: true });
  //   }
  //   // if logged in student, you may redirect to student dashboard (optional)
  //   if (currentUser && role === "student") {
  //     navigate('/userdashboard', { replace: true });
  //   }
  // }, [currentUser, role, navigate]);

  return (
    <>

      {/* <PageRoutes/> */}

      {/* FIREBASE CONNECTION TESTING */}
      {/* <div>
      <TestFirebase />
    </div> */}

      {/* FIREBASE AUTH TESTING */}
      {/* <TestAuth/> */}
      {/* <AuthProvider>
        <TestAuth />
      </AuthProvider> */}

      {/* <AuthStatus/> */}

      {/* <TestAuthStatus/> */}


      {/* <PageRoutes /> */}



      <PageRoutes />;

    </>
  )
}

export default App;