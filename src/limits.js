export function exceeded(usedGrosze, limitGrosze) {
  if (limitGrosze === null || limitGrosze === undefined) return 0;
  if (limitGrosze === 0 || limitGrosze === 0) return 1;
  return Math.max(0, usedGrosze - limitGrosze);
}
