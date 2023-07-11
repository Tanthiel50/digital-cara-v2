import React, { Component } from 'react';
import "../styles/skillsMenu.css";
import classNames from 'classnames';
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";

export default class SkillsMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }
  
  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent(skills) {
    return skills.map((skill, index) =>(
      <div key={index} 
      className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        {[...Array(6)].map((_, i => (
          <div className="level-container"
            key={i} 
            className={`level-point ${i < skill.level ? "filled" : 
            "unfilled"}`}
          ></div>
        )))}
      </div>
    ));
  }
}
