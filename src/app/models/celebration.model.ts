export class Celebration {
  title: string;
  rank: string;
  rank_number: string;
  colour: string;

  constructor(
    title: string,
    rank: string,
    rank_number: string,
    colour: string
  ) {
    this.title = title;
    this.rank = rank;
    this.rank_number = rank_number;
    this.colour = colour;
  }
}
