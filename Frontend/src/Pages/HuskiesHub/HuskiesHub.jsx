import React from "react";
import "./HuskiesHub.css";

import { huskiesPlayers } from "../../Data/huskiesPlayers";
import { huskiesSchedule } from "../../Data/huskiesSchedule";
import { huskiesClinics } from "../../Data/huskiesClinics";
import { huskiesCommits } from "../../Data/huskiesCommits";

function HuskiesHub() {
  const rosterSize = huskiesPlayers.length;
  const upcomingGames = huskiesSchedule.length;
  const upcomingClinics = huskiesClinics.length;

  return (
    <div className="hh-dashboard">
      {/* Sidebar */}
      <aside className="hh-sidebar">
        <h1 className="hh-logo">HuskiesHub</h1>
        <p className="hh-tagline">Empire State Huskies Softball</p>

        <nav className="hh-nav">
          <a href="#overview" className="hh-nav-link">
            Overview
          </a>
          <a href="#roster" className="hh-nav-link">
            Roster
          </a>
          <a href="#schedule" className="hh-nav-link">
            Schedule
          </a>
          <a href="#clinics" className="hh-nav-link">
            Clinics
          </a>
          <a href="#commits" className="hh-nav-link">
            College Commits
          </a>
          <a href="#map" className="hh-nav-link">
            Fields & Map
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="hh-main">
        {/* Overview */}
        <section id="overview" className="hh-section">
          <h2 className="hh-section-title">Team Overview</h2>

          <div className="hh-overview-grid">
            <div className="hh-card hh-kpi">
              <span className="hh-kpi-label">Roster Size</span>
              <span className="hh-kpi-value">{rosterSize}</span>
              <span className="hh-kpi-caption">Active Players</span>
            </div>

            <div className="hh-card hh-kpi">
              <span className="hh-kpi-label">Upcoming Games</span>
              <span className="hh-kpi-value">{upcomingGames}</span>
              <span className="hh-kpi-caption">On the Schedule</span>
            </div>

            <div className="hh-card hh-kpi">
              <span className="hh-kpi-label">Upcoming Clinics</span>
              <span className="hh-kpi-value">{upcomingClinics}</span>
              <span className="hh-kpi-caption">Development Sessions</span>
            </div>
          </div>
        </section>

        {/* Roster */}
        <section id="roster" className="hh-section">
          <h2 className="hh-section-title">Roster</h2>

          <div className="hh-roster-grid">
            {huskiesPlayers.map((player) => (
              <div className="hh-card hh-player-card" key={player.id}>
                <div className="hh-player-avatar">
                  <span>{player.number}</span>
                </div>
                <div className="hh-player-info">
                  <h3 className="hh-player-name">{player.name}</h3>
                  <p className="hh-player-meta">
                    {player.position} · Class of {player.gradYear}
                  </p>
                  {player.commit && (
                    <p className="hh-player-commit">
                      🎓 Committed to <strong>{player.commit}</strong>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="hh-section">
          <h2 className="hh-section-title">Schedule</h2>

          <div className="hh-list">
            {huskiesSchedule.map((game) => (
              <div className="hh-card hh-list-item" key={game.id}>
                <div>
                  <h3 className="hh-list-title">
                    {game.opponent} {game.type === "Tournament" && "🏆"}
                  </h3>
                  <p className="hh-list-meta">
                    {game.date} · {game.time} · {game.location}
                  </p>
                </div>
                <span className={`hh-pill hh-pill--${game.type.toLowerCase()}`}>
                  {game.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Clinics */}
        <section id="clinics" className="hh-section">
          <h2 className="hh-section-title">Clinics</h2>

          <div className="hh-list">
            {huskiesClinics.map((clinic) => (
              <div className="hh-card hh-list-item" key={clinic.id}>
                <div>
                  <h3 className="hh-list-title">{clinic.title}</h3>
                  <p className="hh-list-meta">
                    {clinic.level} · {clinic.date} · {clinic.location}
                  </p>
                </div>
                <span className="hh-pill">{clinic.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* College Commits */}
        <section id="commits" className="hh-section">
          <h2 className="hh-section-title">College Commits</h2>

          <div className="hh-commits-grid">
            {huskiesCommits.map((commit) => (
              <div className="hh-card hh-commit-card" key={commit.id}>
                <h3 className="hh-commit-name">{commit.name}</h3>
                <p className="hh-commit-school">{commit.school}</p>
                <p className="hh-commit-meta">
                  {commit.position} · Class of {commit.gradYear} ·{" "}
                  {commit.division}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Map */}
        <section id="map" className="hh-section">
          <h2 className="hh-section-title">Fields & Map</h2>

          <div className="hh-card hh-map-placeholder">
            <p className="hh-map-title">Google Maps Integration</p>
            <p className="hh-map-caption">
              In the live app this area renders an interactive map with all game
              and practice locations using the Google Maps API.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HuskiesHub;
