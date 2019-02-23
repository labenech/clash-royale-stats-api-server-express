import React from "react";
import propTypes from "prop-types";

import Clan from "./Clan";

const ClanData = props => {
  const { datac, clanStatus } = props;
  let clanData;

  if (datac.length > 0) {
    clanData = datac.map(c => (
      <Clan
        // badgeId={c.badgeId}
        clanChestLevel={c.clanChestLevel}
        clanChestMaxLevel={c.clanChestMaxLevel}
        clanScore={c.clanScore}
        clanWarTrophies={c.clanWarTrophies}
        donationsPerWeek={c.donationsPerWeek}
        id={c.id}
        members={c.members}
        name={c.name}
        requiredTrophies={c.requiredTrophies}
        type={c.type}
        updatedAt={c.updatedAt}
        key={c._id}
      />
    ));
  } else return (clanData = clanStatus);

  return <ul>{clanData}</ul>;
};

ClanData.propTypes = {
  datac: propTypes.array
};

export default ClanData;
