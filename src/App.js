import React from "react";

import Scheduler, { Resource, Editing } from "devextreme-react/scheduler";
import { locale } from "devextreme/localization";

import { data, productionSiteData, productionSiteData2 } from "./data.js";
import DataCell from "./DataCell.jsx";
import TimeCell from "./TimeCell.jsx";

locale("uk-UA");

const currentDate = new Date(2021, 1, 2);
const views = [
  {
    type: "timelineDay",
    name: "По 15min протягом дня",
    cellDuration: 15,
    __columnWidth: 65

    // intervalCount: 1
  },
  {
    type: "timelineWorkWeek",
    name: "По 2h весь робочий тиждень",
    cellDuration: 120,
    __columnWidth: 130
    // intervalCount: 1
  }
];
const groups = ["productionSite"];

const renderDataCell = (itemData) => {
  return <DataCell itemData={itemData} />;
};

const renderTimeCell = (itemData) => <TimeCell itemData={itemData} />;

class App extends React.Component {
  state = {
    elementAttr: {
      style: "--scheduler-column-width: 65px;"
    }
  };

  updateColumnWidth = (component, view) => {
    const newView = views.find((v) => v.name === view);
    this.setState(
      {
        elementAttr: {
          style: `--scheduler-column-width: ${newView.__columnWidth}px;`
        }
      },
      () => {
        component.repaint();
      }
    );
  };

  onAppointmentUpdating = (e) => {
    if (e.oldData.productionSite !== e.newData.productionSite) {
      e.cancel = true;
    }
  };

  handlePropertyChange = (e) => {
    if (e.fullName !== "currentView") {
      return;
    }
    this.updateColumnWidth(e.component, e.value);
  };

  render() {
    return (
      <Scheduler
        timeZone="Europe/Kiev"
        dataSource={data}
        views={views}
        elementAttr={this.state.elementAttr}
        defaultCurrentView={views[0].type}
        defaultCurrentDate={currentDate}
        height={800}
        crossScrollingEnabled
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        maxAppointmentsPerCell={"unlimit"}
        startDayHour={8}
        endDayHour={20}
        dataCellRender={renderDataCell}
        timeCellRender={renderTimeCell}
        onAppointmentUpdating={this.onAppointmentUpdating}
        onOptionChanged={this.handlePropertyChange}
      >
        <Resource
          fieldExpr="productionSite"
          allowMultiple={false}
          dataSource={productionSiteData}
          label="ProductionSite"
        />
        <Editing allowResizing={false} />
      </Scheduler>
    );
  }
}

export default App;
