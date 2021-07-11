import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import Requisition from "./pages/Requisition";
import Layout from "./components/Layout/Layout";
import RequisitionDetail from "./pages/RequisitionDetail";
import RequisitionEdit from "./pages/RequisitionEdit";
import NewRequisition from "./pages/NewRequisition";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/requisition" />
          </Route>
          <Route path="/requisition" exact>
            <Requisition />
          </Route>
          <Route path="/requisition/create" exact>
            <NewRequisition />
          </Route>
          <Route path="/requisition/:requisitionId" exact>
            <RequisitionDetail />
          </Route>
          <Route path="/requisition/edit/:requisitionId">
            <RequisitionEdit />
          </Route>
          <Route path="*">
            <div>This Page not found!</div>
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
