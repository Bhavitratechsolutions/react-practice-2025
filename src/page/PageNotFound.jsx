// import { Link } from "react-router";

// export default function PageNotFound() {
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="text-center p-5 bg-white rounded-4 shadow-lg">
//         <h1 className="display-1 fw-bold text-primary">404</h1>
//         <p className="fs-3 text-dark">Page Not Found</p>
//         <p className="text-muted mb-4">
//           Oops! The page you are looking for doesn’t exist or has been moved.
//         </p>
//         <Link to="/" className="btn btn-primary btn-lg px-4">
//           Go Home
//         </Link>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
     
    >
      <div className="text-center p-5 bg-white rounded-4 shadow-lg">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-3 text-dark">Page Not Found</p>
        <p className="text-muted mb-4">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg px-4">
          Go Home
        </Link>
      </div>
    </div>
  );
}
