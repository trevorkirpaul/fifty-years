const NAME: string = "GAME";

/**
 * **GOLD** can be dispatched using 2
 * different sub-types:
 *
 * 1. `GOLD.ADD`: adds `payload` to player's
 * gold value (Game reducer's gold value)
 *
 * 2. `GOLD.DEPLETE`: removes `payload` from
 * player's gold value (Game reducer's gold value)
 */
const GOLD = {
  ADD: `@@${NAME}/GOLD/ADD`,
  DEPLETE: `@@${NAME}/GOLD/DEPLETE`,
};

/**
 * **ADVANCE_TO_NEXT_YEAR** adds a year
 * to the Game reducer's `currentYear` value
 */
const ADVANCE_TO_NEXT_YEAR = `@@${NAME}/ADVANCE_TO_NEXT_YEAR`;

export { NAME, GOLD, ADVANCE_TO_NEXT_YEAR };
