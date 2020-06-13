import React, { Component } from "react";
import Games from "./Games";
import disableBrowserBackButton from 'disable-browser-back-navigation';

export default class View extends Component {
  componentDidMount() {
    disableBrowserBackButton();
  }
  render() {
    return (
      <div
        className="container"
        style={{
        //   marginTop: "1px",
          display: "flex",
          flexDirection: "column",
        //   justifyContent: "space-around",
          alignItems: "center",          
          backgroundImage: 'url("/assets/background.jpg")',         
        }}
      >
        <Games
          name="GTA V"
          location="../assets/gta.jpg"
          description="Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world."
        />
        <Games
          name="Assassin's Creed: Brotherhood"
          location="../assets/asc.jpg"
          description="Assassin's Creed: Brotherhood is an action-adventure video game with the main emphasis on nonlinear, sandbox-style gameplay, parkour movements, crowd-blending stealth, assassinations, and melee fighting system."
        />
        <Games
          name="Resident Evil 7"
          location="../assets/res.jpg"
          description="The player controls Ethan Winters as he searches for his wife in a derelict plantation occupied by a cannibal family, solving puzzles and fighting enemies. It is the first main series game to use a first-person view."
        />
        <Games
          name="Need For Speed Payback"
          location="../assets/nfs.jpg"
          description='Need for Speed Payback is a racing game set in an open world environment of Fortune Valley; a fictional version of Las Vegas, Nevada. It is focused on "action driving" and has three playable characters (each with different sets of skills) working together to pull off action movie like sequences.'
        />
        
      </div>
    );
  }
}
