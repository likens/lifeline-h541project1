import React, { Component } from "react";
import ekgHR from "../../assets/img/ekg-hr.svg";
import "../../assets/css/Dashboard.css";
import { BloodPressureSys, BloodPressureDia, OxygenSpo2 } from "../../Utils";

class LifeLineDashboard extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="dashboard">
				<div className="dash dash--ekg">
					<div className="dash-title">Electrocardiogram</div>
					<div className="dash-app">
						<div className="graph graph--hr">
							<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
							<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
							<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
							<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
							<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
							<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
							<div className="graph-value"><strong>Currently At: </strong>75<span>bpm</span></div>
						</div>
					</div>
				</div>
				<div className="dash dash--bp">
					<div className="dash-title">Blood Pressure</div>
					<div className="dash-app dash-app--bp">
						<div className="dash-readings dash-readings--bp">
							<div className="dash-reading dash-reading--sys">{Math.floor(Math.random() * (BloodPressureSys[1] - BloodPressureSys[0] + 1)) + BloodPressureSys[0]}</div>
							<div className="dash-reading dash-reading--dia">{Math.floor(Math.random() * (BloodPressureDia[1] - BloodPressureDia[0] + 1)) + BloodPressureDia[0]}</div>
						</div>
						<div className="taken">Last Taken: 12:00pm</div>
					</div>
				</div>
				<div className="dash dash--oxy">
					<div className="dash-title">Blood Oxygen</div>
					<div className="dash-app dash-app--oxy">
						<div className="dash-readings">
							<div className="dash-reading dash-reading--spo2">{Math.floor(Math.random() * (OxygenSpo2[1] - OxygenSpo2[0] + 1)) + OxygenSpo2[0]}<span>%</span></div>
						</div>
						<div className="taken">Last Taken: 4:00pm</div>
					</div>
				</div>
				<div className="dash dash--cal">
					<div className="dash-title">Upcoming Events</div>
					<div className="dash-app dash-app--cal">
						
					</div>
				</div>
			</div>
		);
	}
}

export default LifeLineDashboard;