export function exceeded(usedGrosze, limitGrosze) {
  if (limitGrosze === null || limitGrosze === undefined) return 0;
  if (limitGrosze === 0) return usedGrosze;
  return Math.max(0, usedGrosze - limitGrosze);
}
