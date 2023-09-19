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
    __columnWidth: 65,
    __rowHeight: 50,
  },
  {
    type: "timelineWorkWeek",
    name: "По 2h весь робочий тиждень",
    cellDuration: 120,
    __columnWidth: 130,
    __rowHeight: 50,
  },
  {
    type: "timelineWorkWeek",
    name: "30",
    cellDuration: 120,
    __columnWidth: 130,
    __rowHeight: 30,
  },
  {
    type: "timelineWorkWeek",
    name: "70",
    cellDuration: 120,
    __columnWidth: 130,
    __rowHeight: 70,
  },
  {
    type: "timelineWorkWeek",
    name: "40",
    cellDuration: 120,
    __columnWidth: 130,
    __rowHeight: 40,
  },
  {
    type: "timelineWorkWeek",
    name: "150",
    cellDuration: 120,
    __columnWidth: 130,
    __rowHeight: 150,
  },
];
const groups = ["productionSite"];

const renderDataCell = (itemData) => {
  return <DataCell itemData={itemData} />;
};

const renderTimeCell = (itemData) => <TimeCell itemData={itemData} />;

class App extends React.Component {
  state = {
    elementAttr: {
      style: `--scheduler-column-width: ${views[0].__columnWidth}px;--scheduler-row-height: ${views[0].__rowHeight}px`,
    },
  };

  updateColumnWidth = (component, view) => {
    const newView = views.find((v) => v.name === view);
    this.setState(
      {
        elementAttr: {
          style: `--scheduler-column-width: ${newView.__columnWidth}px;--scheduler-row-height: ${newView.__rowHeight}px`,
        },
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
        // maxAppointmentsPerCell={3}
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
          dataSource={productionSiteData2}
          label="ProductionSite"
        />
        <Editing allowResizing={false} />
      </Scheduler>
    );
  }
}

export default App;
