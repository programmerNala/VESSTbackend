import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SlotList } from "./slot/SlotList";
import { SlotCreate } from "./slot/SlotCreate";
import { SlotEdit } from "./slot/SlotEdit";
import { SlotShow } from "./slot/SlotShow";
import { VouchList } from "./vouch/VouchList";
import { VouchCreate } from "./vouch/VouchCreate";
import { VouchEdit } from "./vouch/VouchEdit";
import { VouchShow } from "./vouch/VouchShow";
import { EmbedList } from "./embed/EmbedList";
import { EmbedCreate } from "./embed/EmbedCreate";
import { EmbedEdit } from "./embed/EmbedEdit";
import { EmbedShow } from "./embed/EmbedShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { SecurityList } from "./security/SecurityList";
import { SecurityCreate } from "./security/SecurityCreate";
import { SecurityEdit } from "./security/SecurityEdit";
import { SecurityShow } from "./security/SecurityShow";
import { EntertainmentList } from "./entertainment/EntertainmentList";
import { EntertainmentCreate } from "./entertainment/EntertainmentCreate";
import { EntertainmentEdit } from "./entertainment/EntertainmentEdit";
import { EntertainmentShow } from "./entertainment/EntertainmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VESSTDiscordBotBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Slot"
          list={SlotList}
          edit={SlotEdit}
          create={SlotCreate}
          show={SlotShow}
        />
        <Resource
          name="Vouch"
          list={VouchList}
          edit={VouchEdit}
          create={VouchCreate}
          show={VouchShow}
        />
        <Resource
          name="Embed"
          list={EmbedList}
          edit={EmbedEdit}
          create={EmbedCreate}
          show={EmbedShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Security"
          list={SecurityList}
          edit={SecurityEdit}
          create={SecurityCreate}
          show={SecurityShow}
        />
        <Resource
          name="Entertainment"
          list={EntertainmentList}
          edit={EntertainmentEdit}
          create={EntertainmentCreate}
          show={EntertainmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
