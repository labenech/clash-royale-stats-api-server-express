// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const Battlelog = require('../../schemas/playertag/battlelog_schema');

ROUTER.param('player', (req, res, next, id) => {
  Battlelog.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    else {
      if (doc[0]) {
        let startingTrophies = [],
          trophyChange = [],
          battleTime = [],
          logs = doc[0].battlelog;

        for (let i = 0; i < logs.length; i++) {
          startingTrophies.push(logs[i].team[0].startingTrophies);
          trophyChange.push(logs[i].team[0].trophyChange);
          battleTime.push(logs[i].battleTime);
        }
        let data = [{ startingTrophies, trophyChange, battleTime }];

        return res.json({ succes: true, doc, data });
      } else return res.json({ succes: true, doc });
    }
  });
});

ROUTER.get('/:player', (req, res, next) => {});

module.exports = ROUTER;
