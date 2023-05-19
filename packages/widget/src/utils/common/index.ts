/**
 * 随机ID值
 */
export const getUnitId = (): string => {
	return Math.random().toString(32).slice(2)
}
