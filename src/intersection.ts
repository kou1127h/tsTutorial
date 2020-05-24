export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAve: number;
};

const Senga: Pitcher1 = {
  throwingSpeed: 155,
};

const Ochiai: Batter1 = {
  battingAve: 0.34,
};

type TwoWayPlayer = Pitcher1 & Batter1;

const Ohtani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAve: 0.234,
};
