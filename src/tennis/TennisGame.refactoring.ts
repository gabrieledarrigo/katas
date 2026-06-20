export interface TennisGame {
  wonPoint(playerName: string): void;
  getScore(): string;
}

export enum Point {
  LOVE = "Love",
  FIFTEEN = "Fifteen",
  THIRTY = "Thirty",
  FORTY = "Forty",
}

export enum Score {
  DEUCE = "Deuce",
  ADVANTAGE = "Advantage",
  WIN = "Win",
}

export class TennisGame1 implements TennisGame {
  private playerOneScore: number = 0;
  private playerTwoScore: number = 0;

  constructor(
    private readonly player1Name: string,
    private readonly player2Name: string,
  ) {}

  /**
   * Set a point for the given player.
   *
   * @param playerName - The name of the player who scored a point
   */
  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) {
      this.playerOneScore += 1;
    } else {
      this.playerTwoScore += 1;
    }
  }

  /**
   * Calculate and return the score a tennis game.
   *
   * @returns The score of the the game
   */
  getScore(): string {
    if (this.playerOneScore === this.playerTwoScore) {
      return this.calculateTieScore();
    }

    if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
      return this.calculateLeadScore();
    }

    return this.calculateRegularScore();
  }

  /**
   * Calculate the current score of a tennis game.
   *
   * @returns The current regular score in the format "Point - Point"
   */
  private calculateRegularScore(): string {
    const currentPlayerOneScore = this.calculatePlayerScore(
      this.playerOneScore,
    );
    const currentPlayerTwoScore = this.calculatePlayerScore(
      this.playerTwoScore,
    );

    return `${currentPlayerOneScore}-${currentPlayerTwoScore}`;
  }

  /**
   * Calculate the score for a player.
   *
   * @param playerScore - The player to calculate the score for
   * @returns The score of the player
   */
  private calculatePlayerScore(playerScore: number): string {
    switch (playerScore) {
      case 0:
        return Point.LOVE;
      case 1:
        return Point.FIFTEEN;
      case 2:
        return Point.THIRTY;
      default:
        return Point.FORTY;
    }
  }

  /**
   * Calculate the lead score of a tennis game.
   *
   * @returns The lead score
   */
  private calculateLeadScore(): string {
    const minusResult = this.playerOneScore - this.playerTwoScore;

    if (minusResult === 1) {
      return `${Score.ADVANTAGE} ${this.player1Name}`;
    }

    if (minusResult === -1) {
      return `${Score.ADVANTAGE} ${this.player2Name}`;
    }

    if (minusResult >= 2) {
      return `${Score.WIN} for ${this.player1Name}`;
    }

    return `${Score.WIN} for ${this.player2Name}`;
  }

  /**
   * Calculate the tie score of a tennis game.
   *
   * @returns The tie score
   */
  private calculateTieScore(): string {
    switch (this.playerOneScore) {
      case 0:
        return `${Point.LOVE}-All`;
      case 1:
        return `${Point.FIFTEEN}-All`;
      case 2:
        return `${Point.THIRTY}-All`;
      default:
        return Score.DEUCE;
    }
  }
}
