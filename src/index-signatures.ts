export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  underTwenty: false,
};

// { [ index: typeForIndex ]: typeForValue }
profile.name = `hayashi`;
profile.nationality = `JP`;
