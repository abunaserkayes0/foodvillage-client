import AuthContext from "../Context/AuthContext";
export default function AuthProvider({ children }) {
  const userInfo = {};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
