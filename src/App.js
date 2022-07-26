import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent } from 'redux/auth/authOperations';

import UserRoutes from 'UserRoutes';
import Header from 'modules/Header';

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getCurrent());
  }, [dispath]);

  return (
    <div>
      <Header />
      <UserRoutes />
    </div>
  );
}

export default App;
